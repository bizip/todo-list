import './main.css';
import Todo from './modules/todo.js';

const todoLisult = new Todo();
document.getElementById('btn').addEventListener('click', () => {
  window.localStorage.clear();
  window.location.reload();
});
todoLisult.newTodolist();
todoLisult.getList();
