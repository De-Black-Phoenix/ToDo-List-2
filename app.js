var newTaskItem = document.getElementById("task");  // access task element and assign to a variable
var addTaskButton = document.getElementById("add_task-btn");    // access task button and assign to a variable


var taskArray = [];                  // initialize an empty array that will contain all the tasks we will obtain from users

function addTaskFunction(event)             // function that accept event object as input 
{
    var taskValue = newTaskItem.value;      // get the value of the input field

    if (taskValue === "")
    {
        alert("PLease enter a valid text value");
    }
    
    else
    {
        taskArray.push(taskValue);              // add the input value to the array using the push() method
        newTaskItem.value = "";                 // clear the input field after value has been stored in array
        console.log(taskArray);                 // log the updated array to the console to make sure we are on track


        var displayTaskItems = document.getElementById("display");  // access list element and assign to a variable
        var listTask = document.createElement("task_list");

        const newTask = listTask.cloneNode(true);

        listTask.textContent = taskValue;
        displayTaskItems.appendChild(listTask);

        listTask.style.borderBottom = "1px solid black";

        // displayTaskItems.innerHTML = taskArray;
    }

    
}

// console.log(taskArray);

addTaskButton.addEventListener("click", addTaskFunction);


// addTaskButton.addEventListener("click", 

//     function addTaskFunction() {
//         alert(newTaskItem.value + " successfully added to list");
//     }
// );

// const style = document.createElement('style');
// style.innerHTML = `
//   li {
//     font-size: 16px;
//     font-weight: bold;
//     padding: 10px;
//   }
// `;
// document.head.appendChild(style);