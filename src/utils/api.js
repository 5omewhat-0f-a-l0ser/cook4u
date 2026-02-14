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

function addItems({ name = "", imageUrl = "", ingredients = ""}) {
  const newrecipe = {
    _id: Date.now().toString(),
    name,
    imageUrl,
    ingredients,
    likes: [],
  };

  defaultRecipes = [newrecipe, ...defaultRecipes];
    return delay(newrecipe);
}

//likes
function addCardLike(_id) {
  defaultRecipes = defaultRecipes.map(recipe =>
    recipe._id === _id
      ? { ...recipe, likes: [...recipe.likes] }
      : recipe
  );
  return delay(defaultRecipes.find(recipe => recipe._id === _id));
}

function removeCardLike(_id) {
  defaultRecipes = defaultRecipes.map(recipe =>
    recipe._id === _id
      ? { ...recipe, likes: [] }
      : recipe
  );
  return delay(defaultRecipes.find(recipe => recipe._id === _id));
}
export { getItems, addItems, handleServerResponse,  addCardLike, removeCardLike };