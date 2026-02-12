import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function CreateRecipeModal({
  isOpen,
  closeActiveModal,
  onAddRecipeSubmit,
}) {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  return (
    <ModalWithForm
      title="Create Recipe"
      buttonText="Create"
      isOpen={isOpen}
      closeActiveModal={closeActiveModal}
      onSubmit={() =>
        onAddRecipeSubmit({
          name,
          imageUrl,
          ingredients,
          instructions,
        })
      }
    >
      <input
        placeholder="Recipe name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        placeholder="Image URL"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        required
      />

      <textarea
        placeholder="Ingredients (one per line)"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        required
      />

      <textarea
        placeholder="Instructions"
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}
        required
      />
    </ModalWithForm>
  );
}

export default CreateRecipeModal;
