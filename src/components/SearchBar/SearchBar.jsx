import { useState } from "react";
import "./SearchBar.css";

function SearchBar({ onSearch, suggestions, onSubmit, onRecipeSelect }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSuggestions = suggestions.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(searchTerm);
    console.log("Suggestions:", suggestions);
    console.log("Filtered:", filteredSuggestions);
  };

  const handleSelect = (recipe) => {
    onRecipeSelect(recipe);
  };

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search for recipes..."
        className="searchbar__input"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="searchbar__button" onClick={handleSubmit}>
        Search
      </button>
      {searchTerm && filteredSuggestions.length > 0 && (
        <ul className="searchbar__dropdown">
          {filteredSuggestions.map((recipe) => (
            <li
              key={recipe._id || recipe.id || recipe.name}
              className="searchbar__dropdown-item"
              onClick={() => handleSelect(recipe)}
            >
              {recipe.name}
            </li>
          ))}
        </ul>
      )}
    </form>
  );
}

export default SearchBar;
