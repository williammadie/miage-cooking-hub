import IngredientDTO from "./IngredientDTO";

interface FullRecipeDTO {
  id: string;
  name: string;
  instructions: string;
  area: string;
  category: string;
  thumbnailUrl: string;
  youtubeRecipe: string;
  tags: string[];
  source: string;
  ingredients: IngredientDTO[];
}

export default FullRecipeDTO;

const NUMBER_INGREDIENT: number = 20;

export const Utils = {
  extractIngredients: function (data: any): IngredientDTO[] {
    const ingredients: IngredientDTO[] = [];
    for (let i = 1; i <= NUMBER_INGREDIENT; i++) {
      const ingredientKey = `strIngredient${i}`;
      const measureKey = `strMeasure${i}`;
      if (data[ingredientKey]) {
        ingredients.push({
          ingredient: data[ingredientKey],
          measure: data[measureKey],
        });
      }
    }
    return ingredients;
  },
};
