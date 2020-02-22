import React from 'react';
import './App.css';

const todosArray = [
  { message: "Get out of bed", date: "Wed Sep 13 2017" },
  { message: "Brush teeth", date: "Thu Sep 14 2017" },
  { message: "Eat breakfast", date: "Fri Sep 15 2017" }
];

function Todo({ message, date }) {
  return (
    <div className="App">{message}{"  ,  "}{date}</div>
  )
}

function App() {
  const todos = todosArray.map((todo, index) =>
    <Todo key={index} message={todo.message} date={todo.date} />)
  return (
    <div className="todo">
      <h1>Todo Checklist</h1>
      {todos}
    </div>
  )
}

export default App;