import './Header.css';
import logo from '../../images/foodieunite.svg';

function Header() {
    return (
        <header className="header">
            <img className="header__logo" src={logo} alt="FoodiesUnite Logo" />
            <h1 className="header__title">FoodiesUnite</h1>
        </header>
    )
}

export default Header;