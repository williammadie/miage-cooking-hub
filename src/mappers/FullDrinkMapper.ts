import FullRecipeDTO, { Utils } from "../dto/FullRecipeDTO";

const FullDrinkMapper = {
  toDto: function (drink: any): FullRecipeDTO {
    return {
      id: drink.idDrink,
      name: drink.strDrink,
      instructions: drink.strInstructions,
      area: drink.strArea,
      category: drink.strCategory,
      thumbnailUrl: drink.strDrinkThumb,
      youtubeRecipe: drink.strVideo,
      tags: drink.strTags !== null ? drink.strTags.split(",") : [],
      source: drink.strSource,
      ingredients: Utils.extractIngredients(drink),
    };
  },

  toDtos: function (drinks: any): FullRecipeDTO[] {
    const drinksDtos: FullRecipeDTO[] = [];
    for (const drink of drinks) {
      drinksDtos.push(this.toDto(drink));
    }
    return drinksDtos;
  },
};

export default FullDrinkMapper;
