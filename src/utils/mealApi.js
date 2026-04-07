const MEAL_API_BASE_URL =
  "https://www.themealdb.com/api/json/v1/1/search.php?s=";

export const fetchMeals = async (query) => {
  const res = await fetch(`${MEAL_API_BASE_URL}${query}`);

  if (!res.ok) {
    throw new Error("Meal not found");
  }

  return res.json();
};
