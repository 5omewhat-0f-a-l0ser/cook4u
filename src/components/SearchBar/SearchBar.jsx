import { useState } from "react";
import "./SearchBar.css";

function SearchBar( { onSearch, onSearchType
 }) {
    const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
    onSubmit(searchTerm);
  };

    return(
        <div className="searchbar">
            <input type="text" 
                placeholder="Search for recipes..." 
                className="searchbar__input" 
                onChange={(e) => {
                    setSearchTerm(e.target.value);
                    onSearchType(e.target.value);
                }}
            />
            <button 
                className="searchbar__button"
                >Search</button>
        </div>
    )
}

export default SearchBar;   