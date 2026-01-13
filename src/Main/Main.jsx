import './Main.css';  
import '../Card/RecipeCard';
import RecipeCard from '../Card/RecipeCard';

function Main() {
    return (
        <main>
            <section className="cards">
                <p className="cards__text">
                    This is where the recipe cards will be displayed.
                </p>
            </section> 
            <ul className="cards__list">
                <RecipeCard/>
            </ul>
        </main>
    )
}

export default Main;