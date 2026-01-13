import './Header.css'; 

import logo from '../images/cook4u.svg';

function Header() {
    return (
        <header className="header">
            <img className="header__logo" src={logo} alt="Cook4U Logo" />
            <button className="header__recipe-btn">Add Recipe</button>
        </header>
    )
}

export default Header;