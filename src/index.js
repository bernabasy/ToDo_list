import './style.css';
import display from './modules/toDo_UI.js';
import Icon from './image/icon.png';
import arrow from './image/arrow.png';
import addToDo from './modules/add.js';

const icon1 = document.querySelector('#icon');
icon1.src = Icon;
const arrowimg = document.querySelector('#arrowimg');
arrowimg.src = arrow;

window.addEventListener('load', () => {
  const newTodoForm = document.querySelector('#new-todo-form');
  newTodoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addToDo(e);
    e.target.reset();
    display();
  });
  display();
});
