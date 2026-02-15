import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import AboutUs from "../AboutUs/AboutUs";
import CreateRecipeModal from "../CreateRecipeModal/CreateModal";
import RecipeModal from "../RecipeCardModal/RecipeModal";
import "./App.css";
//api.js stuff//
import { getItems, addItems,  addCardLike, removeCardLike } from "../../utils/api";

function App() {
  //states for the app//
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState();

  const [recipes, setRecipe] = useState([]); 

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmissionComplete, setIsSubmissionComplete] = useState(false);



  //functions for the app//
  const closeActiveModal = () => {
    setActiveModal("");
  }
  //add-recipe functions//
  const onAddRecipe = () => {
    setActiveModal("create-recipe");
  }
  const handleAddRecipeSubmit = ({ name, imageUrl, ingredients, instructions }) => {
    addItems({ name, imageUrl, ingredients, instructions  })
    .then((newRecipe) => {
        setRecipe([newRecipe, ...recipes]);
        setIsSubmitting(true);
        setIsSubmissionComplete(true);
       closeActiveModal(); 
      })
      .catch(console.error);
  };
  //item card functions//
   const onRecipeCardClick = (card,) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const onRecipeCardLike = ({ _id, isLiked }) => {
     !isLiked
      ? 
        addCardLike(_id)
          .then((updatedRecipe) => {
            setRecipe((recipes) =>
              recipes.map((item) => (item._id === _id ? updatedRecipe: item))
            );
          })
          .catch((err) => console.log(err))
      :
        removeCardLike(_id)
          .then((updatedRecipe) => {
            setRecipe((recipes) =>
              recipes.map((item) => (item._id === _id ? updatedRecipe : item))
            );
          })
  };

  useEffect(() => {
    getItems()
      .then((items) => {
        setRecipe(items.reverse());
      })
      .catch(console.error);
  }, []);

  return (
    <div className="page">
      <Header />
      <Navbar
        onAddRecipeClick={onAddRecipe}
      />

      {/* This is the part that changes by route */}
      <Routes>
        <Route path="/"
         element={
         <Main
          recipes={recipes}
          onRecipeCardClick={onRecipeCardClick}
          onRecipeCardLike={onRecipeCardLike}
         />} />
        <Route path="/contact" element={<AboutUs />} />
      </Routes>

      <Footer />
      <CreateRecipeModal 
        activeModal={activeModal}
        closeActiveModal={closeActiveModal}
        buttonText={"Add Recipe"}
        title={"Add Recipe"}
        isOpen={activeModal === "create-recipe"}
        onAddrecipeSubmit={handleAddRecipeSubmit}
        isSubmitting={isSubmitting}
        isSubmissionComplete={isSubmissionComplete}
      />
      <RecipeModal
        isOpen={activeModal === "preview"}
        closeModal={closeActiveModal}
        card={selectedCard}
      />
    </div>
  );
}

export default App;
