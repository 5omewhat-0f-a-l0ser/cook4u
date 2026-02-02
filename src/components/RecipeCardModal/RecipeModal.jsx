import "./RecipeModal.css";

function RecipeModal() {
   return (
    <div className={`modal  ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__container modal__container_type_img">
        <button
          onClick={closeModal}
          type="button"
          className="modal__close"
        ></button>
        <img src={card?.imageUrl} alt={card?.name} className="modal__img" />
        <span className="modal__footer_container">
        <div className="modal__footer">
          <h2 className="modal__caption">{card?.name}</h2>
        </div>
          <button onClick={deleteCard} className="modal__delete">
            Delete Item
          </button>
        </span>
      </div>
    </div>
  );
}

export default RecipeModal;