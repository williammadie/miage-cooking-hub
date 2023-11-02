import FullRecipeDTO, { Utils } from "../dto/FullRecipeDTO";

const FullMealMapper = {
  toDto: function (meal: any): FullRecipeDTO {
    return {
      id: meal.idMeal,
      name: meal.strMeal,
      instructions: meal.strInstructions,
      area: meal.strArea,
      category: meal.strCategory,
      thumbnailUrl: meal.strMealThumb,
      youtubeRecipe: meal.strYoutube,
      tags: meal.strTags? meal.strTags.split(",") : [],
      source: meal.strSource,
      ingredients: Utils.extractIngredients(meal),
    };
  },

  toDtos: function (meals: any): FullRecipeDTO[] {
    const mealsDtos: FullRecipeDTO[] = [];

    if (meals === null) return mealsDtos;

    for (const meal of meals) {
      mealsDtos.push(FullMealMapper.toDto(meal));
    }
    return mealsDtos;
  },
};

export default FullMealMapper;
