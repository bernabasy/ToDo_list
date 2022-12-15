import display from "./toDo_UI";
const editToDo = (todo, content) => {
  const inpunt = content.querySelector("input");
  inpunt.removeAttribute("readonly");
  inpunt.focus();
  inpunt.addEventListener("blur", (e) => {
    inpunt.setAttribute("readonly", true);
    todo.content = e.target.value;
    localStorage.setItem("todos", JSON.stringify(todos));
    display();
  });
};
export default editToDo;
