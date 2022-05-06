import './main.css';
import Todo from './modules/todo.js';

const todoLisult = new Todo();
document.getElementById('btn').addEventListener('click', () => {
  window.localStorage.clear();
});
todoLisult.newTodolist();
todoLisult.getList();

const setting = document.querySelectorAll('.setting');
setting.forEach((el) => {
  el.addEventListener('click', (e) => {
    todoLisult.removeFromList(e.target.dataset.id);
  });
});

const editValue = document.querySelectorAll('.edit-value');
editValue.forEach((item) => {
  item.addEventListener('change', (e) => {
    todoLisult.editSingleTodo(e.target.value, e.target.dataset.id);
  });
  item.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      todoLisult.editSingleTodo(e.target.value, e.target.dataset.id);
    }
  });
});