import './RecipeCard.css';

function RecipeCard() {
    return (
    <li className="card">
      <span className="card__name_container">
        <h2 className="card__name">Card Title</h2>
          <button
            className="card__like-btn"
          ></button>
      </span>
      <img
        className="card__img"
        src="../images/raspberry_choco.jpg"
        alt="Sample Recipe"
      />
    </li>
    );
}

export default RecipeCard;