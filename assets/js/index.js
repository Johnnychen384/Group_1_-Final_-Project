// allows this javascript page to use TaskManager Class from taskManager.js page.
import TaskManager from "./taskManager.js";

// selectors -------------------------------------------------->
const inputName =  document.getElementById('taskName');
const inputDesc = document.getElementById('taskDescription');
const inputWho = document.getElementById('assignedTo');
const inputCal = document.getElementById('calendar');
const taskContainer = document.getElementById('taskContainer');
const btn = document.getElementById('submitBtn');
const doneBtn = document.getElementById('markedDone');

// creates new Object called newTask using TaskManager Class
// has to be declared above the call back function on btn 
// to prevent resetting array in newTask. This allows us
// to add multiple objects into array.
const newTask = new TaskManager();
newTask.load();


// events ------------------------------------------------------->

// adds event + function to the submit button
btn.addEventListener('click', () => {

    // prevents page from resetting
    event.preventDefault();



    // function to create popup warning depending on field.
    const warningPop = (field) => {

         // creates div containing warning html
        const warning = document.createElement('div');
        warning.classList.add('warning', 'absolute', 'top-3/4', 'left-1/3', 'w-1/3');
        warning.setAttribute('id', 'warning');
        warning.innerHTML = `
            <div class="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
                <p class="font-bold">Warning!</p>
                <p>${field} has not been filled out.</p>
            </div>
        `;

        // if input fields are empty then add warning to form
        taskContainer.appendChild(warning);
    }
   


    // checks if any input field is empty
    if(inputName.value === "" ){
        warningPop("Task_Name")
       
    } else if(inputDesc.value === ''){
        warningPop("Description")

    } else if(inputWho.value === ""){
        warningPop("Assigned_To")

    } else if(inputCal.value === ""){
        warningPop("Date")
        
    } else {

        // removes warning
        if(document.getElementById('warning') !== null){
            document.getElementById('warning').remove();
        }
        
        
        
        // stores all input fields values
        const taskName = inputName.value;
        const taskDesc = inputDesc.value;
        const who = inputWho.value;
        const cal = inputCal.value;
        

        // calls the addTask method in the newTask Object, passing in stored input field values.
        newTask.addTask(taskName, taskDesc, who, cal, "TODO");
        

        // calls render function and saves reference in content var
        newTask.save();
        const content = newTask.render();

        // set taskContainers html  equal to content
        taskContainer.innerHTML = content;

        // clears inputfields
        inputName.value = " ";
        inputDesc.value = " ";
        inputWho.value = " ";
        inputCal.value = "";

    };
    

});


taskContainer.addEventListener('click', e => {
    const target = e.target;

    if(target.classList[0] === "done-button"){
        let parentTask = e.target.parentNode.parentNode.parentNode;
        let taskId = parseInt(parentTask.getAttribute("data-task-id"));
        let task = newTask.getTaskById(taskId);
        newTask.status = 'Done';

		if (newTask.status === 'Done') {
            e.target.classList.remove('visible');
            e.target.classList.add('invisible');

    }
}
})
 
  
