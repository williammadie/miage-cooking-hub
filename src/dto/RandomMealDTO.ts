export class RandomMealDTO {
  id;
  name;
  area;
  category;
  thumbnailUrl;
  youtubeRecipe;

  constructor(data: any) {
    this.id = data.idMeal;
    this.name = data.strMeal;
    this.area = data.strArea;
    this.category = data.strCategory;
    this.thumbnailUrl = data.strMealThumb;
    this.youtubeRecipe = data.strYoutube;
  }
}
