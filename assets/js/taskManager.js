
// function that creates task using passed in arguments.
const  createTaskHtml =(name, description, assignedTo, dueDate, id, status) => {

    if (status === "Done") {
        
        let doneButtonVisibility = "invisible";
       
    } else {
        let doneButtonVisibility = "visible";
    }

    return `
        <div class="flex justify-between bg-white h-16 mb-2 px-4" data-id="${id}">
            <div class="flex flex-col pt-4">
                <button class="done-button">
                    <p class="pointer-events-none" id="markBtn">Mark As Done</p>
                </button>
                <button class="details text-xs mt-1">Details</button>
            </div>
            <h1 class="mt-5 text-lg">${name}</h1>


            <button class="deleteIt">Delete</button>

            <p class="hidden">${description}</p>
            <p class="hidden">${assignedTo}</p>
            <p class="hidden">${dueDate}</p>
            <p class="hidden" id="status">${status}</p>
        </div>
    `
}


// export default allows the TaskManager class to be used in other javascript files.
class TaskManager{



    // function to create properties for object.
    constructor(currentId = 0){
        this.tasks = []
        this.currentId = currentId 
    }

    // function(method) that increments id of object and creates an object
    addTask(name, description, assignedTo, dueDate){

        // increments currentId
        this.currentId++

        // new object
        const task = {
            ID:`${this.currentId}`,
            Name:`${name}`,
            Description:`${description}`,
            AssignedTo:`${assignedTo}`,
            DueDate:`${dueDate}`,
            Status:`ToDo`
            
        }

        // pushes new object created by this addTask function into this.tasks array
        this.tasks.push(task);

        return task
    }


    // renders tasks
    render(){  

        // loop through this objects this.tasks array 
        const tasksHtmlList = this.tasks.map(task => {
            const current = task;

            // convert date to readable string
            const date = new Date(current.DueDate)
            const formattedDate = date.getDay() +'/' + date.getMonth() + '/' + date.getFullYear();
            
            // calls the createTaskHtml passing in all information from each task in the tasks array.
            const taskHtml = createTaskHtml(current.Name, current.Description, current.AssignedTo, current.DueDate, current.ID, current.Status)
           
            // outputs each task in the form they would look like being displayed in actual html
            return taskHtml;
            
        })

        
        // joins all tasks togther 
        const taskHtml = tasksHtmlList.join('\n')
        
        // outputs all tasks joined toghether
        return taskHtml
    }


    // function to get the specific tasks id
    getTaskById(taskId) {

        // loops through this.tasks array and checks for a condition
        let foundTask = this.tasks.filter(task => {
            
            // the conditional saying if the task we current looping through has an ID equal to the ID of the task we want return
            if(taskId == task.ID){
                
                return task
            }
        })
        
        return foundTask
    }


    // function to save all tasks in this.tasks array in localstorage
	save() {

        // saves this.tasks to local
	 	const tasksJson = JSON.stringify(this.tasks);
	 	localStorage.setItem("tasks", tasksJson);

        // saves ID to localstorage
	 	const currentId = this.currentId.toString();
	 	localStorage.setItem("currentId", currentId);
		
	}


    // function to grab array from localstorage 
	load() {
        
        // checks to see if localstorage has any arrays called tasks
	 	if (localStorage.getItem("tasks")) {

	 		let tasksJson = localStorage.getItem("tasks");
			let task = JSON.parse(tasksJson);
            // above code returns an array so no need to push
            this.tasks = task

            // if there is pull the id from localstorage and set it to this.currentId
            let idJson = localStorage.getItem("currentId");
			this.currentId = JSON.parse(idJson);
            
	 	}
    }

	
    // deletes tasks
	deleteTask(taskId) {
        
        let newArray = this.tasks.filter(task => {
            
            // whatever tasks in the this.tasks array doesnt match the task id of task clicked
            // save it in newArray.
            if(task.ID != taskId){
                return task
            }

        })
        
        // set this.tasks array to be whatever is inside newArrays array.
        this.tasks = newArray;
        

        // changes ID number when delete is clicked.
        // if (this.tasks.length > 0){
        //     const newID = this.tasks.length + 1
        //     this.currentId = newID
        //     const currentId = newID.toString()
        //     localStorage.setItem("currentId", currentId);
            
        // } else {
        //     this.currentId = 0
        //     localStorage.setItem("currentId", "0");
        // }
	}

};

    

module.exports = TaskManager; 