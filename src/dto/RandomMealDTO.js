export class RandomMealDTO {
  id;
  name;
  description;
  area;
  category;
  thumbnailUrl;
  youtubeRecipe;

  constructor(data) {
    this.id = data.idMeal;
    this.name = data.strMeal;
    this.description = data.strInstructions;
    this.area = data.strArea;
    this.category = data.strCategory;
    this.thumbnailUrl = data.strMealThumb;
    this.youtubeRecipe = data.strYoutube;
  }
}
