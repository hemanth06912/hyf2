import React from "react";

export default function RepoList(props) {
  return (
    <React.Fragment>
      <h1 className="repo-list">Repos</h1>
      {props.render.map(list => {
        const newList = list;
        return (
          <div key={list.id}>
            <a href={newList.html_url} target="_">
              {newList.name}
            </a>
          </div>
        );
      })}
    </React.Fragment>
  );
}
