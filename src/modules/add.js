const addToDo = (e) => {
  const todos = JSON.parse(localStorage.getItem("todos")) || [];
  const todo = {
    content: e.target.elements.content.value,
    complet: false,
    id: todos.length + 1,
  };
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
};
export default addToDo;
