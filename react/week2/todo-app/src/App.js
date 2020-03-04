import React, { useState } from "react";
import "./App.css";
import WatchCount from "./components/WatchCounter";
import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";

function App() {
  const [todos, setTodos] = useState([
    { text: "Get out of bed", isCompleted: false },
    { text: "Brush teeth", isCompleted: false },
    { text: "Eat breakfast", isCompleted: false }
  ]);

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const deleteTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const todo = todos.map((todo, index) => (
    <Todo
      key={index}
      index={index}
      todo={todo}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  ));

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <WatchCount />
      <h1>Todo Checklist</h1>
      <TodoForm addTodo={addTodo} />
      {todos.length === 0 ? "No items" : todo}
    </div>
  );
}

export default App;
