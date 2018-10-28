const addEl = document.querySelector('.add-list')
const todoListEl = document.querySelector('.todo-list')

addEl.addEventListener('click', e => {
  const newTodoText = prompt('새 할일을 입력하세요');
  addTodo(newTodoText)
})


function addTodo(newTodoText) {
  //리스트 추가하기

  const todoItemEl = document.createElement('li')
  todoItemEl.textContent = newTodoText
  todoListEl.appendChild(todoItemEl);
  //리스트 클래스 추가하기
  todoItemEl.classList.add('todo-item');


  // 삭제버튼
  const deleteButtonEl = document.createElement('button')
  deleteButtonEl.classList.add('icon-minus');

  todoItemEl.appendChild(deleteButtonEl);

  deleteButtonEl.addEventListener('click', e => {

    e.target.parentElement.parentElement.removeChild(e.target.parentElement)
  })


  //위로 버튼
  const upButtonEl = document.createElement("button");
  upButtonEl.classList.add('icon-up')
  todoItemEl.appendChild(upButtonEl);
  upButtonEl.addEventListener('click', e => {

    if (todoItemEl.previousElementSibling != null) {
      todoListEl.insertBefore(todoItemEl, todoItemEl.previousElementSibling)
    }
  })


  //아래로 버튼
  const downButtonEl = document.createElement("button");
  downButtonEl.classList.add('icon-down')
  todoItemEl.appendChild(downButtonEl);
  downButtonEl.addEventListener('click', e => {
    if (todoItemEl.nextElementSibling != null) {
      todoListEl.insertBefore(todoItemEl, todoItemEl.nextElementSibling.nextElementSibling)
    }

  })


}


