import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import AboutUs from "../AboutUs/AboutUs";
import CreateRecipeModal from "../CreateRecipeModal/CreateModal";

import "./App.css";

function App() {
  const [activeModal, setActiveModal] = useState("");
  //const [selectedCard, setSelectedCard] = useState();

  const closeActiveModal = () => {
    setActiveModal("");
  }

  const onAddRecipe = () => {
    setActiveModal("create-recipe");
  }
  return (
    <div className="page">
      <Header />
      <Navbar
        onAddRecipe={onAddRecipe}
      />

      {/* This is the part that changes by route */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/contact" element={<AboutUs />} />
      </Routes>

      <Footer />
      <CreateRecipeModal 
        activeModal={activeModal} 
        closeActiveModal={closeActiveModal}
        buttonText={"Add Recipe"}
        title={"Create a Recipe"}
        isOpen={activeModal === "create-recipe"}
        //isSubmitting={isSubmitting}
      />
    </div>
  );
}

export default App;
