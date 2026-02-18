import {defaultRecipes as seedRecipes} from "../utils/constants.js";

let defaultRecipes = seedRecipes.map(recipe => ({
  ...recipe,
  likes: Array.isArray(recipe.likes) ? recipe.likes : [],
}));
const delay = (data, time = 200) => 
  new Promise(resolve => setTimeout(() => resolve(data), time));

function handleServerResponse(data) {
  return Promise.resolve(data);
}

function getItems() {
  return delay(defaultRecipes);
}

function addItems({ name = "", imageUrl = "", ingredients = "", instructions = "" }) {
 const newrecipe = {
    _id: Date.now().toString(),
    name,
    imageUrl,
    ingredients: ingredients.split("\n"), // 👈 normalize
    instructions,
    likes: [],
  };

  defaultRecipes = [newrecipe, ...defaultRecipes];
  return delay(newrecipe);
}

export { getItems, addItems, handleServerResponse };