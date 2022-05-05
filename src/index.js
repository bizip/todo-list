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
