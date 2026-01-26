import './ModalWithForm.css';

function ModalWithForm() {
    return (
        <div className="modal">
            <div className="modal__container">
                <h2 className="modal__title">Create New Recipe</h2>
                <button className="modal__close" type="button"></button> 
                <form className="modal__form">
                    <input className="modal__input" type="text" placeholder="Recipe Name" required />
                    <textarea className="modal__input modal__input_type_description" placeholder="Ingredients and Instructions" required></textarea>
                    <input className="modal__input" type="url" placeholder="Image URL"/>
                    </form>
                <button className="modal__submit" type="submit">Add Recipe</button>
            </div>
        </div>
    )
}

export default ModalWithForm;