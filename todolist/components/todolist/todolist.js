import AllItems from "../allitems/allitems";

const TodoList = ({ root, tasklist }) => {
  const todolist = document.createElement("ul");

  let filtered = tasklist;

  const markCompleted = (n, completed) => {
    filtered.forEach((todo, i) => {
      if (n === i) {
        todo.completed = completed;
      }
    });
    AllItems({
      todolist,
      filtered,
      setDone: markCompleted,
    });
  };

  AllItems({
    todolist,
    filtered,
    setDone: markCompleted,
  });

  root.appendChild(todolist);
};

export default TodoList;
