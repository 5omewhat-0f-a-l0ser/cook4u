import './Header.css';  

function Header() {
    return (
        <header className="header">
            <img className="header__logo"/>
            <button className="header__recipe-btn">Add Recipe</button>
        </header>
    )
}

export default Header;