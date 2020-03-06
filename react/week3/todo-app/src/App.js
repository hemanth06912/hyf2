import React from "react";
import "./App.css";
import Timer from "./components/timer";
import Todos from "./components/todos";
import Modal from "./components/modal";

function App() {
  return (
    <div className="App">
      <h1>Todo App</h1>
      <Timer />
      <Modal>
        <Todos />
      </Modal>
    </div>
  );
}

export default App;
