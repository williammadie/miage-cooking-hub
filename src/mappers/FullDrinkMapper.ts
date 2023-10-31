import FullRecipeDTO from "../dto/FullRecipeDTO";

class FullDrinkMapper {
  static toDto(drink: any): FullRecipeDTO {
    return new FullRecipeDTO(
      drink.idDrink,
      drink.strDrink,
      drink.strInstructions,
      drink.strArea,
      drink.strCategory,
      drink.strDrinkThumb,
      drink.strVideo,
      drink.strTags.split(","),
      drink.strSource,
      drink
    );
  }

  static toDtos(drinks: any): FullRecipeDTO[] {
    const drinksDtos: FullRecipeDTO[] = [];
    for (let drink of drinks) {
      drinksDtos.push(this.toDto(drink));
    }
    return drinksDtos;
  }
}

export default FullDrinkMapper;
