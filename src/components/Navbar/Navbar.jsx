import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ onAddRecipe }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="navbar">
      <ul className="navbar__links">
        <Link to="/" className="navbar__link">
          <li className="navbar__item">Home</li>
        </Link>

        {/* Recipes dropdown */}
        <li
          className="navbar__item"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
          onClick={() => setIsDropdownOpen(prev => !prev)}
        >
          Recipes
          {isDropdownOpen && (
            <ul className="dropdown">
              <li>
                <Link to="/my-recipes" className="dropdown__item">My Recipes</Link>
              </li>
              <li>
                <Link to="/favorites" className="dropdown__item">Favorites</Link>
              </li>
              <li onClick={onAddRecipe}>Add Recipe</li>
            </ul>
          )}
        </li>

        <li className="navbar__item">Search</li>

        <Link to="/contact" className="navbar__link">
          <li className="navbar__item">Contact</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
