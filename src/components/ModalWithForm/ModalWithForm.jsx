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
          onSubmit={onSubmit}>
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