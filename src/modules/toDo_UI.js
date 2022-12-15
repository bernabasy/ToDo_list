import Remove from './Remove.js';
import allCompleted from './clearCompleted.js';

let editToDo;

export default function display() {
  const todoList = document.querySelector('#todo-list-wrap');
  const todos = JSON.parse(localStorage.getItem('todos')) || [];

  todoList.innerHTML = '';

  todos.forEach((todo) => {
    const todoItem = document.createElement('div');
    todoItem.classList.add('todo-item', todo.complet ? 'complet' : 'a');

    const label = document.createElement('label');
    const input = document.createElement('input');
    const span = document.createElement('span');
    const content = document.createElement('div');
    const actions = document.createElement('div');
    const editBtn = document.createElement('button');
    const removeBtn = document.createElement('button');

    input.type = 'checkbox';
    input.checked = todo.complet;
    span.classList.add('bubble');
    content.classList.add('todo-content');
    actions.classList.add('actions');
    editBtn.classList.add('edit');
    removeBtn.classList.add('remove');

    content.innerHTML = `<input type="text" value="${todo.content}" readonly>`;
    editBtn.innerHTML = 'Edit';
    removeBtn.innerHTML = 'Delete';

    todoList.appendChild(todoItem);
    todoItem.appendChild(label);
    todoItem.appendChild(content);
    todoItem.appendChild(actions);
    label.appendChild(input);
    label.appendChild(span);
    actions.appendChild(editBtn);
    actions.appendChild(removeBtn);

    input.addEventListener('change', () => {
      todo.complet = !todo.complet;

      if (todo.complet) {
        todoItem.classList.add('complet');
      } else {
        todoItem.classList.remove('complet');
      }
      localStorage.setItem('todos', JSON.stringify(todos));
    });

    editBtn.addEventListener('click', () => {
      editToDo(todo, content, todos);
    });

    removeBtn.addEventListener('click', (e) => {
      Remove(todo.id);
      e.target.parentElement.parentElement.remove();
    });
  });
}

editToDo = (todo, content, todos) => {
  const inpunt = content.querySelector('input');
  inpunt.removeAttribute('readonly');
  inpunt.focus();
  inpunt.addEventListener('blur', (e) => {
    inpunt.setAttribute('readonly', true);
    todo.content = e.target.value;
    localStorage.setItem('todos', JSON.stringify(todos));
    display();
  });
};

const clearBtn = document.querySelector('.clear-all');
clearBtn.addEventListener('click', () => {
  allCompleted();
  display();
});
