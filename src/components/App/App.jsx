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
import { getItems, addItems } from "../../utils/api";
import { fetchMeals } from "../../utils/mealApi";
function App() {
  //states for the app//
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState();

  const [allRecipes, setAllRecipes] = useState([]);
  const [recipes, setRecipe] = useState([]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmissionComplete, setIsSubmissionComplete] = useState(false);

  const [searchItem, setSearchItem] = useState("");

  //functions for the app//
  const closeActiveModal = () => {
    setActiveModal("");
  }
  //add-recipe functions//
  const onAddRecipe = () => {
    setActiveModal("create-recipe");
  }
  const handleAddRecipeSubmit = ({ name, imageUrl, ingredients, instructions }) => {
     addItems({ name, imageUrl, ingredients, instructions })
    .then((newRecipe) => {
      setRecipe((prev) => [newRecipe, ...prev]);
      setIsSubmitting();
      setIsSubmissionComplete();
      closeActiveModal();
    })
      .catch(console.error);
  };
  //item card functions//
   const onRecipeCardClick = (card,) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  
  useEffect(() => {
    getItems()
      .then((items) => {
        const revesred = items.reverse();
        setAllRecipes(revesred);
        setRecipe(revesred);
      })
      .catch(console.error);
  }, []);

  //searching function//
  const handleSearchSubmit = (query) => {
  const filteredRecipes = allRecipes.filter(recipe =>
    recipe.name.toLowerCase().includes(query.toLowerCase())
  );
  setRecipe(filteredRecipes);
};
          
          
        
  return (
    <div className="page">
      <Header />
      <Navbar
        onAddRecipeClick={onAddRecipe}
        onSearch={setSearchItem}
        onSearchType={onSearchType}
        onSubmit={handleSearchSubmit}
      />

      {/* This is the part that changes by route */}
      <Routes>
        <Route path="/"
         element={
         <Main
          recipes={recipes}
          onRecipeCardClick={onRecipeCardClick}
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
        onAddRecipeSubmit={handleAddRecipeSubmit}
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