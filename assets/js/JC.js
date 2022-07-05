// Selectors
const inputName =  document.getElementById('taskName');
const inputDesc = document.getElementById('taskDescription');
const inputWho = document.getElementById('assignedTo');
const inputCal = document.getElementById('calendar');
const submitBtn = document.getElementById('submitBtn');
const taskContainer = document.getElementById('taskContainer')

// events

submitBtn.addEventListener('click', () => {

    // checks to confirm no input field is empty before rendering tasks
    if(inputName.value !== '' && inputDesc.value !== '' && inputWho.value !== '' && inputCal.value !== ""){
        renderTasks();
    } else {
        // if any field is empty alert will pop up.
        alert("Please fill out all fields!")
    }
});
taskContainer.addEventListener('click', popUp);




// functions



// this function creates task with information taken from inputs
function renderTasks(){

    // prevents refreshing 
    event.preventDefault()

    // stores all inputs from form
    const taskName = inputName.value;
    const taskDesc = inputDesc.value;
    const who = inputWho.value;
    const cal = inputCal.value;




    // creates div and adds stored information into div
    const newDiv = document.createElement('div')
    newDiv.classList.add('flex', 'justify-between', 'bg-white', 'h-16', 'mb-2', 'px-4')
    newDiv.innerHTML += `
       
        <div class="flex flex-col pt-4">
            <button class="completedTask">
                <i class="far fa-square"></i>
            </button>
            <button class="details text-xs">Details</button>
        </div>
        <h1 class="mt-5 text-lg">${taskName}</h1>

        
        <button class="deleteIt">Delete</button>
       
        <p class="hidden">${taskDesc}</p>
        <p class="hidden">${who}</p>
        <p class="hidden">${cal}</p>
    `

    // adds newDiv to taskContainer.
    taskContainer.appendChild(newDiv)
};






// function that depends on what the class of the event that triggers it is, to do something/
function popUp(e){
    const target = e.target;

    // checks to make sure what is clicked is details
    if(target.classList[0] === "details"){
        
        // stored data from inputs that are hidden inside the tasks
        // I assign variables to these data to allow it to be easier to add to new div.
        const taskDescription = target.parentElement.parentElement.children[3].innerHTML;
        const taskWho = target.parentElement.parentElement.children[4].innerHTML;
        const taskCal = target.parentElement.parentElement.children[5].innerHTML;

        // creates new div and adds content onto it based on above varibles.
        const newDiv = document.createElement('div')
        newDiv.classList.add('flex', 'flex-col', 'bg-white', 'absolute', 'h-fill', 'w-3/6', 'border-2', 'border-black', 'top-3/5', 'p-10')
        newDiv.innerHTML += `
            <div class="flex flex-col">
                <h1 class="mb-3">Description</h1>
                <p class="border-2 border-black	h-20">${taskDescription}</p>
            </div>
            <br>
            <p>Assigned To: ${taskWho}</p>
            <br>
            <div class="flex justify-between">
                <p>Due By: ${taskCal}</p>
                <button class="closeIt">Close</button>
            </div>
            
        `

        // adds newDiv to task container.
        taskContainer.appendChild(newDiv)



    // checks if it is the close button that is clicked.
    } else if(target.classList[0] === "closeIt"){

        // removes close buttons grandparent element.
        target.parentElement.parentElement.remove()
    };


};