import NutritionInfoDTO from "../dto/NutritionInfoDTO";

const NutritionInformationMapper = {
  toDto: function (nutrition: any): NutritionInfoDTO {
    return {
      id: nutrition._id,
      brandName: nutrition.brands,
      genericName: nutrition.generic_name,
      nutritionScore: nutrition.nutriscore_grade,
      novaIndex: nutrition.nova_group,
      openFoodFactsURL: nutrition.url,
      imgURL: nutrition.image_front_small_url,
    };
  },

  toDtos: function (nutritions: any): NutritionInfoDTO[] {
    const nutritionsDtos: NutritionInfoDTO[] = [];
    for (const nutrition of nutritions) {
      nutritionsDtos.push(this.toDto(nutrition));
    }
    return nutritionsDtos;
  },
};

export default NutritionInformationMapper;
