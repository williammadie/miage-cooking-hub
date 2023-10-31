import PreviewRecipeDTO from "../dto/PreviewRecipeDTO";

const PreviewMealMapper = {
  toDto: function (meal: any): PreviewRecipeDTO {
    return {
      id: meal.idMeal,
      name: meal.strMeal,
      thumbnailUrl: meal.strMealThumb,
    };
  },

  toDtos: function (meals: any): PreviewRecipeDTO[] {
    const mealsDtos: PreviewRecipeDTO[] = [];

    if (meals === null) return mealsDtos;

    for (const meal of meals) {
      mealsDtos.push(PreviewMealMapper.toDto(meal));
    }
    return mealsDtos;
  },
};

export default PreviewMealMapper;
