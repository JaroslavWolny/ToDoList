import TodoItem from "../todoitem/todoitem";

const AllItems = ({ todolist, filtered, setDone }) => {
  todolist.innerHTML = "";
  filtered.forEach((todoData, i) => {
    todolist.appendChild(
      TodoItem({
        todoData,
        i,
        setDone,
      })
    );
  });
};

export default AllItems;
