import PreviewRecipeDTO from "../dto/PreviewRecipeDTO";
import FullRecipeDTO from "../dto/FullRecipeDTO";

export default interface IRecipeService {
  getRandomRecipe(): Promise<FullRecipeDTO>;

  getRecipesByName(name: string): Promise<PreviewRecipeDTO[]>;

  getRecipesByMainIngredientName(name: string): Promise<PreviewRecipeDTO[]>;

  getFullRecipeById(name: string): Promise<FullRecipeDTO>;
}
