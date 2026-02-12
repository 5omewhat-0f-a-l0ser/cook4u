import './ModalWithForm.css';

function ModalWithForm({
    children,
    activeModal,
    closeActiveModal,
    title,
    buttonText,
    onSubmit,
    isOpen
}) {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const name = formData.get("name");
        const imageUrl = formData.get("imageUrl");
        const ingredients = formData.get("ingredients");
        onSubmit(name, imageUrl, ingredients);
    }

    return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__container">
        <h2 className="modal__title">{title}</h2>
        <button
          onClick={closeActiveModal}
         
          type="button"
          className="modal__close"
        ></button>
        <form 
          className="modal__form" 
          onSubmit={handleSubmit}>
          {children}
          <button
           type="submit" 
           className="modal__submit"
            >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;