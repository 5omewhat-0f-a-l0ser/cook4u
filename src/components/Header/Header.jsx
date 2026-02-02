import './Header.css';
import logo from '../../images/foodieunite.svg';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <Link to="/">   
                <img className="header__logo" src={logo} alt="FoodiesUnite Logo" />
            </Link>
            <h1 className="header__title">FoodiesUnite</h1>
        </header>
    )
}

export default Header;