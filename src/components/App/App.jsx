import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";

import { defaultRecipes } from "../../utils/constants";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import AboutUs from "../AboutUs/AboutUs";
import CreateRecipeModal from "../CreateRecipeModal/CreateModal";
import RecipeCardModal from "../RecipeCardModal/RecipeCardModal";

import "./App.css";
//api.js stuff//
import { addItems } from "../../utils/api";

function App() {
  //states for the app//
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState();

  const [recipes, setRecipes] = useState(defaultRecipes); 

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmissionComplete, setIsSubmissionComplete] = useState(false);

  const navigate = useNavigate();


  //functions for the app//
  const closeActiveModal = () => {
    setActiveModal("");
  }
  //add-recipe functions//
  const handleAddRecipe = () => {
    setActiveModal("create-recipe");
  }
  const handleAddRecipeSubmit = (name, imageUrl, ingredients) => {
    addItems({ name, imageUrl, ingredients })
    .then((newRecipe) => {
        setRecipes([newRecipe, ...recipes]);
        setIsSubmitting(true);
        setIsSubmissionComplete(true);
        navigate("/my-recipes");
       closeActiveModal(); 
      })
      .catch(console.error);
  };
  //item card functions//
   const handleRecipeCardClick = (card,) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  return (
    <div className="page">
      <Header />
      <Navbar
        onAddRecipe={handleAddRecipe}
      />

      {/* This is the part that changes by route */}
      <Routes>
        <Route path="/"
         element={
         <Main
          recipes={recipes}
          onRecipeCardClick={handleRecipeCardClick}
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
        onAddRecipe={handleAddRecipeSubmit}
        isSubmitting={isSubmitting}
        isSubmissionComplete={isSubmissionComplete}
      />
      <RecipeCardModal
        isOpen={activeModal === "preview"}
        closeModal={closeActiveModal}
        card={selectedCard}
      />
    </div>
  );
}

export default App;
