// Selectors
const inputName =  document.getElementById('taskName');
const inputDesc = document.getElementById('taskDescription');
const inputWho = document.getElementById('assignedTo');
const inputCal = document.getElementById('calendar');
const submitBtn = document.getElementById('submitBtn');
const taskContainer = document.getElementById('taskContainer')

// events
submitBtn.addEventListener('click', renderTasks)
taskContainer.addEventListener('click', popUp);




// functions

function renderTasks(){
    event.preventDefault()

    const taskName = inputName.value;
    const taskDesc = inputDesc.value;
    const who = inputWho.value;
    const cal = inputCal.value;





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
    taskContainer.appendChild(newDiv)
};



function popUp(e){
    const target = e.target;

    if(target.classList[0] === "details"){
        
        const taskDescription = target.parentElement.parentElement.children[3].innerHTML;
        const taskWho = target.parentElement.parentElement.children[4].innerHTML;
        const taskCal = target.parentElement.parentElement.children[5].innerHTML;

        const newDiv = document.createElement('div')
        newDiv.classList.add('flex', 'flex-col', 'bg-white', 'absolute', 'h-1/5', 'w-3/6', 'border-2', 'border-slate-100', 'top-3/5', 'p-10')
        newDiv.innerHTML += `
            <div class="flex flex-col">
                <h1>Description</h1>
                <p class="border-2 border-black	">${taskDescription}</p>
            </div>
            <br>
            <p>Assigned To: ${taskWho}</p>
            <br>
            <div class="flex justify-between">
                <p>Due By: ${taskCal}</p>
                <button>Close</button>
            </div>
            
        `
        taskContainer.appendChild(newDiv)


    }

};