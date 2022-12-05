import React from "react";

function Search({ searchSpell, onSearchChange }) {


  return (
    <div >
      <input 
      className="search"
      id="search-bar" 
      type="text" 
      placeholder="Search Spells" 
      value={searchSpell} 
      onChange = {(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}

export default Search;
