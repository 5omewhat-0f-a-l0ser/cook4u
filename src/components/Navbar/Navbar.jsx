import "./Navbar.css";

function Navbar() {
    return(
        <nav className="navbar">
            <ul className="navbar__links">
                <li className="navbar__item">Home</li>
                <li className="navbar__item">Recipes</li>
                <li className="navbar__item">Search</li>
                <li className="navbar__item">Contact</li>
            </ul>
        </nav>
    )
}

export default Navbar;