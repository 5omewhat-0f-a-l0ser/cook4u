//simport { useState, useEffect } from "react";
import "./RecipeModal.css";

function RecipeModal({ recipe, isOpen, closeModal, card, }) {
  if (!card) return null;

  const recipeText = `
    Ingredients:
    ${card.ingredients.join("\n")}

    Instructions:
    ${card.instructions}
      `;
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
           value={recipeText}
          readOnly
        />
        <span className="modal__footer_container">
        <div className="modal__footer">
          <h2 className="modal__caption">{recipe?.name}</h2>
          </div>
        </span>
      </div>
    </div>
  );
}

export default RecipeModal;