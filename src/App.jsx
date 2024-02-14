import { useEffect, useState } from "react";
import "./style.css";
import TodoList from "./TodoList";

export default function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")));
  const [todo, setTodo] = useState({});
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos), todos);
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (todo.title != "") {
      setTodos([...todos, todo]);
      setTodo({ id: todo.id, title: "" });
      localStorage.setItem("todos", JSON.stringify(todos));
    } else {
      return;
    }

    console.log(todos);
  }

  function handleDelete(id) {
    let filteredTodos = todos.filter((todo) => todo.id != id);
    setTodos(filteredTodos);
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  return (
    <>
      <div className="container">
        <form onSubmit={(e) => handleSubmit(e)}>
          <label className="new-item" htmlFor="task">
            New Item
          </label>
          <br />
          <input
            value={todo.title || ""}
            onChange={(e) =>
              setTodo({ id: crypto.randomUUID(), title: e.target.value })
            }
            className="new-item-input"
            id="task"
            type="text"
          />
          <br />
          <button className="add" type="submit">
            Add
          </button>
        </form>
        <h1>Todo List</h1>

        {todos.map((todo) => {
          return (
            <TodoList
              key={todo.id || ""}
              todo={todo && todo.title ? todo.title : ""}
              onDelete={() => handleDelete(todo.id)}
            />
          );
        })}
      </div>
    </>
  );
}
