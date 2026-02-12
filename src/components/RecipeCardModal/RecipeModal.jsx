import { useState, useEffect } from "react";
import "./RecipeModal.css";

function RecipeModal({ isOpen, closeModal, card, deleteCard }) {
  const [setNotes] = useState("");

  useEffect(() => {
    if (card) {
      setNotes(card.description || "");
    }
  }, [card]);

   return (
    <div className={`modal  ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__container modal__container_type_recipe">
        <button
          onClick={closeModal}
          type="button"
          className="modal__close"
        ></button>
        <textarea
          className="modal__input_type_description"
          defaultValue={card?.description}
          readOnly
        />
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