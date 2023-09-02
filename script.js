window.onload = function () {
   loadTasks();
   addButtonListeners();
   addCheckBoxListener();
}

function addButtonListeners() {
   let removeButtons = document.getElementsByClassName('delete-btn');

   Array.from(removeButtons).forEach((removeButton) => {
      removeButton.addEventListener('click', () => {
         removeButton.parentNode.remove();
         saveTasks();
      });
   });
}

function addCheckBoxListener() {
   let checkboxes = document.getElementsByClassName("check");
   let taskField = document.getElementsByClassName("task");

   for (let i = 0; i < checkboxes.length; i++) {
      checkboxes[i].addEventListener('change', function (){
         if (checkboxes[i].checked) {
            taskField[i].style.textDecoration = "line-through";
         } else {
            taskField[i].style.textDecoration = "none";
         }
         saveTasks();
      });
   }
}

document.getElementById("add-task-button").addEventListener("click", function () {
   let newTask = document.getElementById("input-task").value;
   if (newTask === "") return;

   const task = '<li>' +
       '<input type="checkbox" class="check">' +
       '<span class="task">' + newTask + '</span>' +
       '<button class="delete-btn">X</button>' +
       '</li>';
   document.getElementById("input-task").value = "";

   document.getElementById("task-list").insertAdjacentHTML('afterbegin', task);
   addCheckBoxListener();
   addButtonListeners();
   saveTasks();
});

function saveTasks() {
   localStorage.setItem("tasks", document.getElementById("task-list").innerHTML);
}

function loadTasks() {
   let tasksList = localStorage.getItem('tasks');

   if (tasksList != null) {
      document.getElementById("task-list")
          .insertAdjacentHTML('afterbegin', localStorage.getItem("tasks"));
   }
}



































