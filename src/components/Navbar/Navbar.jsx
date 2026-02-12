import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ onAddRecipeClick }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="navbar">
      <ul className="navbar__links">
        <Link to="/" className="navbar__link">
          <li className="navbar__item">Home</li>
        </Link>

        {/* Recipes dropdown */}
        <li
          className="navbar__item dropdown"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
          onClick={() => setIsDropdownOpen(prev => !prev)}
        >
          Recipes
          {isDropdownOpen && (
            <ul className="dropdown__menu">
              <button type="button" className="dropdown__item"onClick={onAddRecipeClick}>Add Recipe</button>
            </ul>
          )}
        </li>
        <Link to="/contact" className="navbar__link">
          <li className="navbar__item">Contact</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
