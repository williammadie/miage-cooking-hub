/**
 * This file contains routes for accessing DataDB APIs:
 * - TheMealDB
 * - CocktailDB
 */

export const DATA_DB_PREFIX = {
  MEAL: "themealdb",
  COCKTAIL: "thecocktaildb",
};

export const DATA_DB_ROUTES = {
  RANDOM_RECIPE: "random.php",
  RECIPE_BY_ID: "lookup.php?i=",
  RECIPE_BY_NAME: "search.php?s=",
  RECIPE_BY_MAIN_INGREDIENT: "filter.php?i=",
};

export const OPEN_FOOD_FACTS = {
  NUTRITION_BY_BRAND: "https://world.openfoodfacts.org/api/v2/search?brands_tags=",
};

export function buildURL(api: string, route: string): string {
  return `https://www.${api}.com/api/json/v1/1/${route}`;
}
