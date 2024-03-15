"use client";

import { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");

  const addTodo = () => {
    if (todoInput.trim() !== "") {
      setTodos([...todos, { text: todoInput, completed: false }]);
      setTodoInput("");
    }
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <div>
      <div className="flex gap-3 my-8">
        <input
          type="text"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
          placeholder="Enter a todo..."
          className="input input-bordered w-full flex-1"
        />
        <button
          onClick={addTodo}
          className="btn btn-primary btn-outline flex-none"
        >
          Add
        </button>
      </div>
      <ul className="grid gap-2 md:gap-4">
        {todos.map((todo, index) => (
          <li
            className="flex items-center gap-3 bg-base-100 shadow-xl p-3"
            key={index}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(index)}
              className="checkbox checkbox-sm flex-none"
            />
            <span className="flex-1 max-w-prose">{todo.text}</span>
            <button
              onClick={() => deleteTodo(index)}
              className="btn btn-error btn-outline btn-sm flex-none"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
