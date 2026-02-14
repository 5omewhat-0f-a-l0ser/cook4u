import './RecipeCard.css';

function RecipeCard({
  recipe,
  onRecipeCardClick,
  onRecipeCardLike
}) {

const likes = recipe.likes || [];
const isLiked = likes.length > 0;

const recipeLikeButton = isLiked ? "card__like card__like_liked" : "card__like";
  console.log("isLiked:", isLiked, "recipeLikeButton:", recipeLikeButton);
    return (
    <li className="card">
      <span className="card__name_container">
        <h2 className="card__name">{recipe.name}</h2>
      </span>
      <button
        className={recipeLikeButton}
        onClick={(e) => {
          e.stopPropagation();
          console.log("LIKED!", recipe._id, isLiked);
          onRecipeCardLike({_id: recipe._id, isLiked})
        }}
      ></button>
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