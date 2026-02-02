import { Link } from 'react-router-dom';
import './AboutUs.css';

function AboutUs() {
    return (
        <section className="about-us">
            <h2 className="about-us__title">About Us</h2>
            <p className="about-us__description">
                Welcome to FoodiesUnite, your ultimate destination for delicious recipes and culinary inspiration! Our mission is to bring food enthusiasts together from around the world to share their love for cooking and explore diverse cuisines. Whether youre a seasoned chef or a home cook, FoodiesUnite offers a platform to discover new recipes, share your own creations, and connect with fellow food lovers. Join us on this flavorful journey and lets celebrate the joy of cooking together!
            </p>
            <ul className="about-us__team"> 
                <li className="about-us__team-member">
                    <Link to="" className='about-us__team-member-contact'>Millie Houston</Link>
                </li>
            </ul>
        </section>
    )
}

export default AboutUs;