export default class Status {
    upadate = (data) => {
      const allcheckbox = document.querySelectorAll('.check-box');
      const allToCheck = document.querySelectorAll('.edit-value');

      allcheckbox.forEach((el, items) => {
        el.addEventListener('click', () => {
          allToCheck[items].classList.toggle('checked__data');
          data[items].isCompleted = !data[items].isCompleted;
          localStorage.setItem('todoList', JSON.stringify(data));
          if (data[items].isCompleted) {
            allToCheck[items].classList.add('checked__data');
          }
        });
      });
    }
}