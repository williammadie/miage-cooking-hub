class FullRecipeDTO {
  id: string;
  name: string;
  description: string;
  area: string;
  category: string;
  thumbnailUrl: string;
  youtubeRecipe: string;

  constructor(
    id: string,
    name: string,
    description: string,
    area: string,
    category: string,
    thumbnailUrl: string,
    youtubeRecipe: string
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.area = area;
    this.category = category;
    this.thumbnailUrl = thumbnailUrl;
    this.youtubeRecipe = youtubeRecipe;
  }
}

export default FullRecipeDTO;
