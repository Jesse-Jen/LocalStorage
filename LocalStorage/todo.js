document.addEventListener("DOMContentLoaded", function(){
  let todoForm = document.getElementById('newTodoForm')
  let todoList = document.getElementById('todoList')
  let savedTodos = [];

  //retreiving from local
  todoForm.addEventListener('submit',function(e){
    e.preventDefault()
    let newLi = document.createElement('li')
    let removeBtn = document.createElement('button')
    removeBtn.innerText = 'X'
    newLi.innerText = document.getElementById('task').value

    newLi.append(removeBtn)
    todoList.append(newLi)
    todoForm.reset();

  todoList.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
      e.target.style.textDecoration = 'line-through'
    } else if (e.target.tagName === 'BUTTON'){
      e.target.parentNode.remove()
    }
    })
  })
})





 