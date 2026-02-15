import { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function CreateRecipeModal({
  isOpen,
  closeActiveModal,
  onAddRecipeSubmit,
  isSubmitting,
  isSubmissionComplete
}) {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
 const resetForm = () => {
    setName("");
    setImageUrl("");
    setIngredients("");
    setInstructions("");
  };

  useEffect(() => {
    if (!isOpen) {
      resetForm();
    }
  }, [isOpen]);
  useEffect(() => {
    if (isSubmissionComplete) {
      resetForm();
    }
  }, [isSubmissionComplete]);

 const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleUrlChange = (e) => {
    setImageUrl(e.target.value);
  };

  const handleIngredientsChange = (e) => {
    setIngredients(e.target.value);
  };

  const handleInstructionsChange = (e) => {
    setInstructions(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddRecipeSubmit(name, imageUrl, ingredients, instructions);
  };

  return (
    <ModalWithForm
      title="Create Recipe"
      buttonText="Create"
      isOpen={isOpen}
      closeActiveModal={closeActiveModal}
      onSubmit={handleSubmit}
      isSubmitting={isSubmitting}
    >
      <input
        placeholder="Recipe name"
        value={name}
        onChange={handleNameChange}
        required
      />

      <input
        placeholder="Image URL"
        value={imageUrl}
        onChange={handleUrlChange}
        required
      />

      <textarea
        placeholder="Ingredients (one per line)"
        value={ingredients}
        onChange={handleIngredientsChange}
        required
      />

      <textarea
        placeholder="Instructions"
        value={instructions}
        onChange={handleInstructionsChange}
        required
      />
    </ModalWithForm>
  );
}

export default CreateRecipeModal;
