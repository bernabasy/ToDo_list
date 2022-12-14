const setIds = () => {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.forEach((todo, index) => {
      todo.id = index + 1;
    });
    localStorage.setItem('todos', JSON.stringify(todos));
  };
  
const Remove = {
  todo(id) {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    const newToDos = todos.filter((todo) => todo.id !== id);
    localStorage.setItem('todos', JSON.stringify(newToDos));
    setIds();
  },
};

export default Remove;
