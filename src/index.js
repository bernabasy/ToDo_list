import './style.css';
import display from './modules/toDo_UI.js';
import Icon from './image/icon.png';
import arrow from './image/arrow.png';

const icon1 = document.querySelector('#icon');
icon1.src = Icon;
const arrowimg = document.querySelector('#arrowimg');
arrowimg.src = arrow;

window.addEventListener('load', () => {
  const todos = JSON.parse(localStorage.getItem('todos')) || [];
  const newTodoForm = document.querySelector('#new-todo-form');

  newTodoForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const todo = {
      content: e.target.elements.content.value,
      complet: false,
      id: todos.length + 1,
    };

    // Global variable = todos
    todos.push(todo);

    localStorage.setItem('todos', JSON.stringify(todos));

    e.target.reset();

    display();
  });

  display();
});

