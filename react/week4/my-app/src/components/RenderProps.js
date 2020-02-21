import React, { useState, useEffect } from "react";
import RepoList from "./RepoList";

function Repos() {
  const [list, setList] = useState([]);
  useEffect(() => {
    const URL = `https://api.github.com/users/hemanth06912/repos`;
    (async () => {
      try {
        const response = await fetch(URL);
        const json = await response.json();
        const result = json;
        setList(result);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [setList]);
  console.log(list);
  return <RepoList render={list} />;
}

export default Repos;
