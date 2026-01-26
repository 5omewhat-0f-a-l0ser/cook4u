import { Routes, Route } from "react-router-dom";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import AboutUs from "../AboutUs/AboutUs";
import CreateRecipeModal from "../CreateRecipeModal/CreateModal";

import "./App.css";

function App() {
  return (
    <div className="page">
      <Header />
      <Navbar />

      {/* This is the part that changes by route */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/contact" element={<AboutUs />} />
      </Routes>

      <Footer />
      <CreateRecipeModal />
    </div>
  );
}

export default App;
