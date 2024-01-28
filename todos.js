document.addEventListener("DOMContentLoaded", function() {
  let form = document.querySelector('#newTodoForm');
  let list = document.querySelector('#todoList');

  function updateLocalStorage() {
      localStorage.setItem('tasks', JSON.stringify(Array.from(list.children).map(function(task) {
          return task.innerText;
      })));
  }

  let savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

  savedTasks.forEach(function(taskText) {
      let removeBtn = document.createElement("button");
      removeBtn.innerText = "X";

      let newTodo = document.createElement("li");
      newTodo.innerText = taskText;

      list.appendChild(newTodo);
      newTodo.appendChild(removeBtn);
  });

  form.addEventListener("submit", function(e) {
      e.preventDefault();

      let removeBtn = document.createElement("button");
      removeBtn.innerText = "X";

      let newTodo = document.createElement("li");
      newTodo.innerText = document.getElementById("task").value;

      list.appendChild(newTodo);
      newTodo.appendChild(removeBtn);

      updateLocalStorage();

      form.reset();
  });

  list.addEventListener("click", function(e) {
      if (e.target.tagName === "LI") {
          e.target.style.textDecoration = "line-through";
          updateLocalStorage();
      } else if (e.target.tagName === "BUTTON") {
          e.target.parentNode.remove();
          updateLocalStorage();
      }
  });
});