//  Select elements
const taskInput = document.getElementById("task");
const addTaskButton = document.getElementById("add_task-btn");

let taskList = document.getElementById("task_list");
let ulTaskList = document.getElementById("display");

let taskArray = [];


function taskAdder(event) 
{
    event.preventDefault();
    
    // Get task input value
    let taskInputValue = taskInput.value;
    
    if (taskInputValue === "") 
    {
        alert("Enter a valid text value");
    }
    
    else 
    {   
        // Clone the first list item
        let newTaskList = ulTaskList.firstElementChild.cloneNode(true);
        
            // Set the text content of the new task to the input value
            newTaskList.textContent = taskInputValue;
            
            // Add the new task to the task list ("ul" element) list
            ulTaskList.appendChild(newTaskList);
            
            // Add the new task to the task list array
            taskArray.push(taskInputValue);
            
            // Clear the task input field
            taskInput.value = "";
            
            // Log the tasks array to the console
            console.log(taskArray);
        }

}

// add task when button is clicked
addTaskButton.addEventListener("click", taskAdder);

// add task when enter key is pressed
taskInput.addEventListener("keyup", function(event) { if (event.key === 'Enter') { addTaskButton.click(); } });