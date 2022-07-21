// allows this javascript page to use TaskManager Class from taskManager.js page.
import TaskManager from "./taskManager.js";

// selectors -------------------------------------------------->
const inputName =  document.getElementById('taskName');
const inputDesc = document.getElementById('taskDescription');
const inputWho = document.getElementById('assignedTo');
const inputCal = document.getElementById('calendar');
const taskContainer = document.getElementById('taskContainer');
const btn = document.getElementById('submitBtn');



// events ------------------------------------------------------->

// adds event + function to the submit button
btn.addEventListener('click', () => {

    // prevents page from resetting
    event.preventDefault();


    // creates div containing warning html
    const warning = document.createElement('div');
    warning.classList.add('warning', 'absolute', 'top-3/4', 'left-1/3', 'w-1/3');
    warning.setAttribute('id', 'warning');
    warning.innerHTML = `
        <div class="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
            <p class="font-bold">Warning!</p>
            <p>Not all fields have been filled.</p>
        </div>
    `;


    // checks if any input field is empty
    if(inputName.value === "" || inputDesc.value === '' || inputWho.value === "" || inputCal.value === ""){

        // if input fields are empty then add warning to form
        taskContainer.appendChild(warning);
        
    } else {

        // removes warning
        if(document.getElementById('warning') !== null){
            document.getElementById('warning').remove();
        }
        
        
        
        // creates new Object called newTask using TaskManager Class
        const newTask = new TaskManager();

        // stores all input fields values
        const taskName = inputName.value;
        const taskDesc = inputDesc.value;
        const who = inputWho.value;
        const cal = inputCal.value;



        // calls the addTask method in the newTask Object, passing in stored input field values.
        newTask.addTask(taskName, taskDesc, who, cal, "TODO");
        console.log(newTask.tasks)


        renderTasks();

        // clears inputfields
        inputName.value = " "
        inputDesc.value = " "
        inputWho.value = " "
        inputCal.value = " "

    };
    
});





