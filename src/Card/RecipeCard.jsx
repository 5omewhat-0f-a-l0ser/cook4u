function RecipeCard() {
    return (
    <li className="card">
      <span className="card__name_container">
        <h2 className="card__name">{item.name}</h2>
          <button
            className={itemLikeButton}
          ></button>
      </span>
      <img
        className="card__img"
        src={item.imageUrl}
        alt={item.name}
      />
    </li>
    );
}

export default RecipeCard;