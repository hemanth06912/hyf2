import React, { useContext } from "react";
import { stateContext } from "../App.js";

function Searcher() {
  const { query, setQuery, setLoading } = useContext(stateContext);

  const handleSubmit = e => {
    e.preventDefault();
    if (!query) return;
    setQuery("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          value={query}
          placeholder="Search for user"
          onChange={e => {
            setQuery(e.target.value);
            setLoading(true);
          }}
        />
      </form>
    </>
  );
}

export default Searcher;
