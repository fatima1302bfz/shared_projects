//load data in start
getDataFromLocalStorage();
let arrayOfTasks = [];


//check if there is data in local storage
if (localStorage.getItem("tasks")) {
    arrayOfTasks = JSON.parse(localStorage.getItem("tasks"));
    for (let i = 0; i < arrayOfTasks.length; i++) {
        document.querySelector('#list').innerHTML += `
    <div class="toDo">
            ${arrayOfTasks[i].title}
            <button class="check">
            <i class='bx bx-check-circle'></i>
            </button>
            <button class="remove">
            <i class='bx bx-x-circle'></i>
            </button>
    </div`;
    }
    //check item
    var current_checkItem = document.querySelectorAll(".check");
    for (var i = 0; i < current_checkItem.length; i++) {
        current_checkItem[i].onclick = function() {
            this.parentNode.style.textDecoration = "line-through";
            this.parentNode.style.textDecorationColor = "#e46db6";
            this.parentNode.style.color = "#7FB5FF";

        }

        current_checkItem[i].ondblclick = function() {
            this.parentNode.style.textDecoration = "none";
            this.parentNode.style.color = "#fff";
        }
    }
    //remove item 
    var current_item = document.querySelectorAll(".remove");
    for (var i = 0; i < current_item.length; i++) {
        current_item[i].onclick = function() {
            this.parentNode.remove();

        }
    }
}


//store data in array
function addTaskToArray(taskText) {
    const task = {
        id: Date.now(),
        title: taskText,
        completed: false
    };
    arrayOfTasks.push(task);

    addDataToLocalStorage(arrayOfTasks)
}
//store data in local storage
function addDataToLocalStorage(array) {
    window.localStorage.setItem("tasks", JSON.stringify(array))
}

function getDataFromLocalStorage() {
    let data = window.localStorage.getItem("tasks");
    if (data) {
        let tasks = JSON.parse(data);
        console.log(tasks)
    }
}
//create element
let input = document.querySelector('#tasks input')

function createTask() {
    if (input.value.length == 0) {
        alert("Task empty!, please write something");
    } else {
        document.querySelector('#list').innerHTML += `
              <div class="toDo">
                      ${input.value}
                      <button class="check">
                      <i class='bx bx-check-circle'></i>
                      </button>
                      <button class="remove">
                      <i class='bx bx-x-circle'></i>
                      </button>
              </div`;
        addTaskToArray(input.value);
        input.value = "";
    }
    //check item
    var current_checkItem = document.querySelectorAll(".check");
    for (var i = 0; i < current_checkItem.length; i++) {
        current_checkItem[i].onclick = function() {
            this.parentNode.style.textDecoration = "line-through";
            this.parentNode.style.textDecorationColor = "#e46db6";
            this.parentNode.style.color = "#7FB5FF";

        }

        current_checkItem[i].ondblclick = function() {
            this.parentNode.style.textDecoration = "none";
            this.parentNode.style.color = "#fff";
        }
    }
    //remove item 
    var current_item = document.querySelectorAll(".remove");
    for (var i = 0; i < current_item.length; i++) {
        current_item[i].onclick = function() {
            this.parentNode.remove();

        }
    }
}