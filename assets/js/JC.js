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
}
// function that has multi-uses which depends on what the class of the event that triggers it is, to do something/
function popUp(e){
    const target = e.target;

    // checks to make sure what is clicked is details
    if(target.classList[0] === "details")
    
     // checks to make sure what is clicked is details
     if(target.classList[0] === "details");
}