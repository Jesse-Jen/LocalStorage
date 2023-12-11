  
  document.addEventListener("DOMContentLoaded", function(){
    let todoForm = document.getElementById('newTodoForm')
    let todoList = document.getElementById('todoList')
    let savedTodos = JSON.parse(localStorage.getItem('todos')) || []
    //retreiving from local
    for (let i = 0; i < savedTodos.length; i++){
      let newLi = document.createElement('li')
      newLi.innerText = savedTodos[i].task
      //creating attribute isDone to store true/false value
      newLi.isDone = savedTodos[i].isDone? true : false
      if (newLi.isDone){
        newLi.style.textDecoration = 'line-through'
      }
      todoList.appendChild(newLi)
    }


    todoForm.addEventListener('submit', function(e){
      e.preventDefault()
      let newLi = document.createElement('li')
      newLi.isDone = 'false'
      newLi.innerText = document.getElementById('task').value
      todoList.append(newLi)
      todoForm.reset()

      //adding to localStorage
      savedTodos.push({task: newLi.innerText, isDone: false })
      localStorage.setItem('todos', JSON.stringify(savedTodos))
    })
    todoList.addEventListener('click', function(e){
      if(e.target.isDone === true){
        e.target.style.textDecoration = 'none'
        e.target.isDone = false
      } else {
        e.target.style.textDecoration = 'line-through'
        e.target.isDone = true
      }
    })
    
  })







  
