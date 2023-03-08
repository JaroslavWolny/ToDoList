import "./style.css";
import TodoList from "./components/todolist/todolist";

TodoList({
  root: document.body,
  tasklist: [
    {
      title: "Vymazat celý počítač",
      completed: false,
    },
    {
      title: "Jít ven se psem",
      completed: true,
    },
    {
      title: "Rozmrazit dveře od auta",
      completed: false,
    },
    {
      title: "Vzít přítelkyni na večeři",
      completed: false,
    },
  ],
});
