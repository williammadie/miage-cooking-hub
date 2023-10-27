interface FullRecipeDTO {
  id: string;
  name: string;
  description: string;
  area?: string;
  category: string;
  thumbnailUrl: string;
  youtubeRecipe: string;
}

export default FullRecipeDTO;
