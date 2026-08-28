const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';


export async function searchMeals(query) {
  try {
    const response = await fetch(`${BASE_URL}/search.php?s=${query}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json(); // conversion of the file in json also take some time
    return data.meals || []; // if by any chance the data didnt came right an empty array is returned 
  } catch (error) {
    console.error("Failed to fetch meals:", error);
    throw error;
  }
}


export async function getMealDetails(id) {
  try {
    const response = await fetch(`${BASE_URL}/lookup.php?i=${id}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.meals ? data.meals[0] : null;
  } catch (error) {
    console.error("Failed to fetch meal details:", error);
    throw error;
  }
}
