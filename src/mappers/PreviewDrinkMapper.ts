import PreviewRecipeDTO from "../dto/PreviewRecipeDTO";

const PreviewDrinkMapper = {
  toDto: function (drink: any): PreviewRecipeDTO {
    return {
      id: drink.idDrink,
      name: drink.strDrink,
      thumbnailUrl: drink.strDrinkThumb,
    };
  },

  toDtos: function (drinks: any): PreviewRecipeDTO[] {
    const drinksDtos: PreviewRecipeDTO[] = [];
    if (drinks === null || drinks === undefined) return drinksDtos;

    for (const drink of drinks) {
      drinksDtos.push(PreviewDrinkMapper.toDto(drink));
    }
    return drinksDtos;
  },
};

export default PreviewDrinkMapper;
