
// function that creates task using passed in arguments.
const  createTaskHtml =(name, description, assignedTo, dueDate, status) => {
    return `
        <div class="flex justify-between bg-white h-16 mb-2 px-4">
            <div class="flex flex-col pt-4">
                <button class="completedTask">
                    <i class="far fa-square pointer-events-none"></i>
                </button>
                <button class="details text-xs">Details</button>
            </div>
            <h1 class="mt-5 text-lg">${name}</h1>


            <button class="deleteIt">Delete</button>

            <p class="hidden">${description}</p>
            <p class="hidden">${assignedTo}</p>
            <p class="hidden">${dueDate}</p>
        </div>
    `
}




// export default allows the TaskManager class to be used in other javascript files.
export default class TaskManager{

    // function to create properties for object.
    constructor(currentId = 0){
        this.tasks = []
        this.currentId = currentId;
    }

    // function(method) that increments id of object and creates an object
    addTask(name, description, assignedTo, dueDate, status){

        // increments currentId
        this.currentId++

        // new object
        const task = {
            ID:`${this.currentId}`,
            Name:`${name}`,
            Description:`${description}`,
            AssignedTo:`${assignedTo}`,
            DueDate:`${dueDate}`,
            Status:`${status}`
            
        }

        // pushes new object created by this addTask function into this.tasks array
        this.tasks.push(task);
    }


    render(){
        const tasksHtmlList = this.tasks.map(task => {
            const current = task;
            const date = new Date(current.DueDate)
            const formattedDate = date.getDay() +'/' + date.getMonth() + '/' + date.getFullYear();
            console.log(formattedDate)
            const taskHtml = createTaskHtml(current.Name, current.Description, current.AssignedTo, current.DueDate)
            return taskHtml;
            
        })

        

        const taskHtml = tasksHtmlList.join('\n')
        
        return taskHtml
    }

};


