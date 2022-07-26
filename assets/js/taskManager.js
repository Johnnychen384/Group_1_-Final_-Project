
// function that creates task using passed in arguments.
const  createTaskHtml =(name, description, assignedTo, dueDate, id, status) => {

    // let doneButtonVisibility = "visible";
	// if (status === "Done") {
	// 	doneButtonVisibility = "invisible";
	// }

    // return `        <li id="taskCard" class="list-group-item" data-task-id = "${id}">
// // 		<div class="card-body" id="data-task-id">
// // 		  <div class="alignment">
// // 		    <p class="card-text" id="title"><span class="fw-bold">Task Name:</span> ${name}</p>
// // 			<button type="button" class="markDone btn btn-secondary done-button ${doneButtonVisibility}">Mark as done</button>
// // 			</div>
// // 		  <p class="card-text"><span class="fw-bold">Task Description:</span> ${description}</p>
// // 		  <p class="card-text"><span class="fw-bold">Assigned Date:</span> ${assignedTo}</p>
// // 		  <p class="card-text"><span class="fw-bold">Due Date:</span> ${dueDate}</p>
// // 		  <div class="alignment">
// // 		  <p class="card-text"><span class="fw-bold">Status:</span> ${status}</p>
// // 		  <div class="move">
// // 		      <button type="button" class="btn btn-danger delete-button">Delete</button>
// // 		  </div>
// // 		</div>
// // 	  </div>
// // </li>`;

    return `
        <div class="flex justify-between bg-white h-16 mb-2 px-4" data-id="${id}">
            <div class="flex flex-col pt-4">
                <button class="done-button">
                    <p class="pointer-events-none">Mark As Done</p>
                </button>
                <button class="details text-xs mt-1">Details</button>
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
            
            const taskHtml = createTaskHtml(current.Name, current.Description, current.AssignedTo, current.DueDate, current.ID)
           
            return taskHtml;
            
        })

        

        const taskHtml = tasksHtmlList.join('\n')
        
        return taskHtml
    }


    // getTaskById(taskId) {
	// 	let foundTask;

	// 	for (let task of this._tasks) {
	// 		if (task.id == taskId) {
	// 			foundTask = task;
	// 		}
	// 	}
	// 	return foundTask;
	// }

	// save() {
	// 	const tasksJson = JSON.stringify(this._tasks);
	// 	localStorage.setItem("tasks", tasksJson);
	// 	console.log(tasksJson)
	// 	const currentId = this._currentId.toString();
	// 	localStorage.setItem("currentId", currentId);
		
	// }

	// load() {
	// 	if (localStorage.getItem("tasks")) {
	// 		let tasksJson = localStorage.getItem("tasks");
	// 		this._tasks = JSON.parse(tasksJson);
	// 		console.log(tasksJson)
	// 	}


	// 	if (localStorage.getItem("currentId")) {
	// 		let currentId = localStorage.getItem("currentId");
	// 		this._currentId = parseInt(currentId);
	// 	}
	// }

	// deleteTask(taskId) {
	// 	let newTasks = [];

	// 	for (let i = 0; i < this._tasks.length; i++) {
	// 		let task = this._tasks[i];

	// 		if (task.id !== taskId) {
	// 			newTasks.push(task);
	// 		}
	// 	}
	// 	this._tasks = newTasks;
	// }

};
    
