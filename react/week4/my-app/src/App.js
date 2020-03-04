import React, { useState, createContext } from "react";
import "./App.css";
import Searcher from "./components/Searcher";
import FetchUser from "./components/FetchUser";
import Repos from "./components/RenderProps";

export const stateContext = createContext();

function App() {
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <div className="App">
      <div className="component">
        <stateContext.Provider
          value={{
            query,
            setQuery,
            error,
            setError,
            user,
            setUser,
            loading,
            setLoading
          }}
        >
          <h1>Github user searcher</h1>
          <Searcher />
          <FetchUser />
        </stateContext.Provider>
      </div>
      <div className="repos">
        <Repos />
      </div>
    </div>
  );
}

export default App;
