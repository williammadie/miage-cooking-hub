import FullRecipeDTO from "../dto/FullRecipeDTO";

const FullCocktailMapper = {
  toDto: function (drink: any): FullRecipeDTO {
    return {
      id: drink.idDrink,
      name: drink.strDrink,
      description: drink.strInstructions,
      category: drink.strCategory,
      thumbnailUrl: drink.strDrinkThumb,
      youtubeRecipe: drink.strVideo,
    };
  },

  toDtos: function (drinks: any): FullRecipeDTO[] {
    const drinksDtos: FullRecipeDTO[] = [];
    
    if (drinks === null) return drinksDtos;
    
    for (const drink of drinks) {
      drinksDtos.push(FullCocktailMapper.toDto(drink));
    }
    return drinksDtos;
  },
};

export default FullCocktailMapper;
