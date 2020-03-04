import React, { useEffect, useContext } from "react";
import { stateContext } from "../App.js";

function FetchUser() {
  const {
    query,
    user,
    setUser,
    error,
    setError,
    loading,
    setLoading
  } = useContext(stateContext);

  useEffect(() => {
    const URL = `https://api.github.com/search/users?q=${query}`;
    (async () => {
      try {
        const response = await fetch(`${URL}`);
        const json = await response.json();
        const result = json;
        setUser(result);
        setLoading(false);
        setError(result.message);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [query, setUser, error, setError, setLoading]);

  return (
    <div className="userList">
      {loading ? (
        <p>loading...</p>
      ) : (
        <ul>
          {user.items === undefined ? (
            <p>No items</p>
          ) : (
            user.items.map(list => {
              const newList = list;
              return (
                <a href={newList.html_url} target="_">
                  <li key={list.id}>{newList.login}</li>
                </a>
              );
            })
          )}
        </ul>
      )}
    </div>
  );
}

export default FetchUser;
