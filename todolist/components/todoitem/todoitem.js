const TodoItem = ({ todoData, i, setDone }) => {
  const todo = document.createElement("li");
  todo.innerText = todoData.title;
  if (todoData.completed) {
    todo.classList.add("done");
  }
  todo.addEventListener("click", () => {
    console.log(todoData);
    setDone(i, !Boolean(todoData.completed));
  });

  return todo;
};

export default TodoItem;
