import PreviewRecipeDTO from "../dto/PreviewRecipeDTO";

const PreviewCocktailMapper = {
  toDto: function (drink: any): PreviewRecipeDTO {
    return {
      id: drink.idDrink,
      name: drink.strDrink,
      thumbnailUrl: drink.strDrinkThumb,
    };
  },

  toDtos: function (drinks: any): PreviewRecipeDTO[] {
    const drinksDtos: PreviewRecipeDTO[] = [];

    if (drinks === null) return drinksDtos;

    for (const drink of drinks) {
      drinksDtos.push(PreviewCocktailMapper.toDto(drink));
    }
    return drinksDtos;
  },
};

export default PreviewCocktailMapper;
