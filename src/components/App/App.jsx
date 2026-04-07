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
  };
  //add-recipe functions//
  const onAddRecipe = () => {
    setActiveModal("create-recipe");
  };
  const handleAddRecipeSubmit = ({
    name,
    imageUrl,
    ingredients,
    instructions,
  }) => {
    addItems({ name, imageUrl, ingredients, instructions })
      .then((newRecipe) => {
        const updated = [newRecipe, ...allRecipes];

        setAllRecipes(updated);
        setRecipe(updated);
        setIsSubmitting(false);
        setIsSubmissionComplete(true);
        closeActiveModal();
      })
      .catch(console.error);
  };
  //item card functions//
  const onRecipeCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  useEffect(() => {
    if (allRecipes.length === 0) return;

    console.log("saving to storage!", allRecipes);
    localStorage.setItem("recipes", JSON.stringify(allRecipes));
  }, [allRecipes]);

  useEffect(() => {
  const stored = localStorage.getItem("recipes");
  const savedRecipes = stored ? JSON.parse(stored) : [];

  getItems()
    .then((items) => {
      const defaultRecipes = items.reverse();

      // Create a Map to ensure uniqueness by Name
      const uniqueMap = new Map();
      
      // Add defaults first, then let saved recipes overwrite them if names match
      defaultRecipes.forEach(r => uniqueMap.set(r.name, r));
      savedRecipes.forEach(r => uniqueMap.set(r.name, r));

      const combined = Array.from(uniqueMap.values());

      setAllRecipes(combined);
      setRecipe(combined);
    })
    .catch(console.error);
}, []); 

  useEffect(() => {
    if (!activeModal) return;
    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        closeActiveModal();
      }
    };

    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]);

  //searching function//
  const handleSearchSubmit = async (query) => {
    const localResults = allRecipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(query.toLowerCase()),
    );

    try {
      const data = await fetchMeals(query);

      const apiResults = data.meals
        ? data.meals.map((meal) => {
            const ingredients = [];

            for (let i = 1; i <= 20; i++) {
              const ingredient = meal[`strIngredient${i}`];
              const measure = meal[`strMeasure${i}`];

              if (ingredient && ingredient.trim()) {
                ingredients.push(
                  `${measure ? measure.trim() : ""} ${ingredient.trim()}`,
                );
              }
            }

            return {
              id: meal.idMeal,
              name: meal.strMeal,
              imageUrl: meal.strMealThumb,
              instructions: meal.strInstructions,
              ingredients, // 🔥 THIS is what your modal needs
              source: "api",
            };
          })
        : [];
      setRecipe([...localResults, ...apiResults]);
    } catch (err) {
      console.error(err);
      setRecipe(localResults);
    }
  };

  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Navbar
          onAddRecipeClick={onAddRecipe}
          onSearch={setSearchItem}
          onSubmit={handleSearchSubmit}
          suggestions={recipes}
          onRecipeSelect={onRecipeCardClick}
        />

        {/* This is the part that changes by route */}
        <Routes>
          <Route
            path="/"
            element={
              <Main recipes={recipes} onRecipeCardClick={onRecipeCardClick} />
            }
          />
          <Route path="/contact" element={<AboutUs />} />
        </Routes>

        <Footer />
      </div>
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
