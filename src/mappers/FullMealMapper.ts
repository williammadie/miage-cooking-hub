import FullRecipeDTO from "../dto/FullRecipeDTO";

class FullMealMapper {
  static toDto(meal: any): FullRecipeDTO {
    return new FullRecipeDTO(
      meal.idMeal,
      meal.strMeal,
      meal.strInstructions,
      meal.strArea,
      meal.strCategory,
      meal.strMealThumb,
      meal.strYoutube
    );
  }

  static toDtos(meals: any): FullRecipeDTO[] {
    const mealsDtos: FullRecipeDTO[] = [];
    for (let meal of meals) {
      mealsDtos.push(this.toDto(meal));
    }
    return mealsDtos;
  }
}

export default FullMealMapper;
