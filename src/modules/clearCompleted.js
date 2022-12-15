import setIds from './setIds.js';

const allCompleted = () => {
  const todos = JSON.parse(localStorage.getItem('todos')) || [];
  const newToDos = todos.filter((todo) => todo.complet === false);
  localStorage.setItem('todos', JSON.stringify(newToDos));
  setIds();
};

export default allCompleted;
