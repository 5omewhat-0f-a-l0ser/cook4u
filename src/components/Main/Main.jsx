import './Main.css';  
import '../Card/RecipeCard';
import RecipeCard from '../Card/RecipeCard';

function Main({
    recipes,
    onRecipeCardClick,
    onRecipeCardLike
}) {
    return (
        <main>
            <section className="cards">
                <p className="cards__text">
                    This is where the recipe cards will be displayed.
                </p>
            </section> 
            <ul className="cards__list">
                {recipes.map((recipe) => (
                <RecipeCard
                key={recipe._id}
                recipe={recipe}
                onRecipeCardClick={() => onRecipeCardClick(recipe)}
                onRecipeCardLike={onRecipeCardLike}
                />
            ))}
            </ul>
        </main>
    )
}

export default Main;