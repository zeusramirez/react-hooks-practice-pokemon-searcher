import React from "react";

function Search(props) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={props.searchTerm} onChange={props.handleTermChange}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
