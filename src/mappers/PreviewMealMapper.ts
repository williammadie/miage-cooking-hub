import PreviewRecipeDTO from "../dto/PreviewRecipeDTO";

class FullMealMapper {
  static toDto(meal: any): PreviewRecipeDTO {
    return new PreviewRecipeDTO(meal.idMeal, meal.strMeal, meal.strMealThumb);
  }

  static toDtos(meals: any): PreviewRecipeDTO[] {
    const mealsDtos: PreviewRecipeDTO[] = [];
    for (let meal of meals) {
      mealsDtos.push(this.toDto(meal));
    }
    return mealsDtos;
  }
}

export default FullMealMapper;
