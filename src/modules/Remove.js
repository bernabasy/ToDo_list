import setIds from './setIds.js';

const Remove = (id) => {
  const todos = JSON.parse(localStorage.getItem('todos')) || [];
  const newToDos = todos.filter((todo) => todo.id !== id);
  localStorage.setItem('todos', JSON.stringify(newToDos));
  setIds();
};
export default Remove;
