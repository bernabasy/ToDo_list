import './style.css';
import Icon from './image/icon.png';
import arrow from './image/arrow.png';
import more from './image/more.png';

const icon1 = document.querySelector('#icon');
icon1.src = Icon;
const arrowimg = document.querySelector('#arrowimg');
arrowimg.src = arrow;

const todoList = document.querySelector('#todo-list-wrap');
const taskLists = [
  {
    description: 'Build a To Do List App',
    completed: false,
    index: 0,
  },
  {
    description: 'Learn Javascript',
    completed: false,
    index: 1,
  },
  {
    description: 'read',
    completed: false,
    index: 2,
  },
];

const display = () => {
  taskLists.forEach((todo) => {
    const todoItem = document.createElement('div');
    todoItem.classList.add('todo-item');

    const label = document.createElement('div');
    const input = document.createElement('input');
    const span = document.createElement('span');
    const content = document.createElement('div');
    const actions = document.createElement('div');
    const editImg = document.createElement('img');

    input.type = 'checkbox';
    input.checked = todo.completed;
    input.setAttribute('aria-label', 'checkbox');
    editImg.src = more;
    editImg.setAttribute('alt', 'restart todo');

    label.classList.add('label');
    span.classList.add('bubble');
    content.classList.add('todo-content');
    actions.classList.add('actions');

    content.innerHTML = `<input type='text' value='${todo.description}' aria-label='task' readonly>`;

    todoList.appendChild(todoItem);
    todoItem.appendChild(label);
    todoItem.appendChild(content);
    todoItem.appendChild(actions);
    actions.appendChild(editImg);
    label.appendChild(input);
    label.appendChild(span);
  });
};
display();
