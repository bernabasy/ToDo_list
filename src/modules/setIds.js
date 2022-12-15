const setIds = () => {
  const todos = JSON.parse(localStorage.getItem('todos')) || [];
  todos.forEach((todo, index) => {
    todo.id = index + 1;
  });
  localStorage.setItem('todos', JSON.stringify(todos));
};
export default setIds;
