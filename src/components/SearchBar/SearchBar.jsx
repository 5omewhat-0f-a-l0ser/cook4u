import { useState } from "react";
import "./SearchBar.css";

function SearchBar( { onSearch }) {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (e) =>{
        e.preventDefault();
        onSearch(searchTerm);
    }


    return(
        <div className="searchbar">
            <input type="text" 
                placeholder="Search for recipes..." 
                className="searchbar__input" 
                onChange={(e) => {setSearchTerm(e.target.value)}}
            />
            <button 
                className="searchbar__button"
                onSubmit={handleSearch}
                >Search</button>
        </div>
    )
}

export default SearchBar;   