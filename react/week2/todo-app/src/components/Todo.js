import React from "react";

function Todo({ todo, index, completeTodo, deleteTodo }) {
  return (
    <>
      <div
        className="todo"
        style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      >
        {todo.text}
      </div>
      <div>
        <input
          type="checkbox"
          id="myCheck"
          onClick={() => completeTodo(index)}
        />
        <button onClick={() => deleteTodo(index)}>Delete</button>
      </div>
    </>
  );
}

export default Todo;
