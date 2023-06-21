import React from "react";
import { TodoContext } from "../TodoContext";

function ToDoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);

  return (
    <input
      className="searchInput"
      value={searchValue}
      placeholder="Cortar cebolla"
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    />
  );
}

export { ToDoSearch };
