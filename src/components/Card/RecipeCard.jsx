import './RecipeCard.css';

function RecipeCard({
  recipe,
  onRecipeCardClick
}) {

  return (
    <li className="card">
      <span className="card__name_container">
        <h2 className="card__name">{recipe.name}</h2>
      </span>
      <img
        className="card__img"
        src={recipe.imageUrl}
        alt={recipe.name}
        onClick={(e) => {
          onRecipeCardClick(e);
        }}
      />
    </li>
    );
}

export default RecipeCard;