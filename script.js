const form = document.getElementById("form");
const input = document.getElementById("input");
const todosUL = document.getElementById("todos");



const getTodos = JSON.parse(localStorage.getItem('todos'));

if(getTodos){
  getTodos.forEach((todo) =>{
    AddTodo(todo);
  })
}


function AddTodo(todo){
  let todoText = input.value;
  
  if(todo){
    todoText = todo.text;
  }
  console.log('todo',todo);
  console.log('todoText', todoText);

  if(todoText){
    const todoEl = document.createElement('li');
    if(todo && todo.completed){
      todoEl.classList.add('completed');
    }

    todoEl.innerText = todoText;

    todosUL.appendChild(todoEl);
    input.value = '';
    saveToLocalStorage();
    
    todoEl.addEventListener('click', () =>{
      todoEl.classList.toggle('completed');

      saveToLocalStorage();
    })
    
    todoEl.addEventListener('contextmenu', (e) =>{
      e.preventDefault();

      todoEl.remove();
      saveToLocalStorage();
    });
  }

}


form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  AddTodo();
});



function saveToLocalStorage  () {
  const todosEl = document.querySelectorAll('li');

  const datas  = [];

  todosEl.forEach((todo) =>{
    datas.push({
      text: todo.innerText,
      completed: todo.classList.contains("completed")
    })
  })

  localStorage.setItem('todos', JSON.stringify(datas))
}
// function saveToLocalStorage(){
//   const todosEl = document.querySelectorAll('li');
//   let todos = [];

//  todosEl.forEach((todo) =>{
//   todos.push({
//     text: todo.innerText,
//     completed: todo.classList.contains("completed")
//   });
//  });
// localStorage.setItem('todos', JSON.stringify(todos));
// }

