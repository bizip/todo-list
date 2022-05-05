import trash from '../three_dot.svg';

export default class Todo {
  constructor() {
    this.todoList1 = JSON.parse(localStorage.getItem('todoList')) || [];
  }

    newTodolist = () => {
      const formToReset = document.getElementById('frm');
      const newInput = document.getElementById('new-todo');
      newInput.addEventListener('keypress', (e) => {
        if (e.code === 'Enter') {
          if (e.target.value.length > 0) {
            const value = {
              description: e.target.value,
              isCompleted: false,
              index: this.todoList1.length,
            };
            this.todoList1.push(value);
            localStorage.setItem('todoList', JSON.stringify(this.todoList1));
            formToReset.reset();
          }
        }
        this.getList();
      });
    }

    getList = () => {
      const lst = document.getElementById('list');
      lst.innerHTML = this.todoList1.map((el) => (` <li class="list">
          <div class="single_list">
              <input type="checkbox">
              <p>${el.description}</p>
          </div>
          <svg class="none" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
              <path
                  d="M19 24h-14c-1.104 0-2-.896-2-2v-17h-1v-2h6v-1.5c0-.827.673-1.5 1.5-1.5h5c.825 0 1.5.671 1.5 
                  1.5v1.5h6v2h-1v17c0 1.104-.896 2-2 2zm0-19h-14v16.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-16.5zm-9 4c0-.552-.448-1-1-1s-1
                   .448-1 1v9c0 .552.448 1 1 1s1-.448 1-1v-9zm6 0c0-.552-.448-1-1-1s-1 .448-1 1v9c0 .552.448 1 1 1s1-.448 1-1v-9zm-2-7h-4v1h4v-1z" />
          </svg>
          <img src="${trash}" alt="settings" />
          </li>`)).join('');
    }
}