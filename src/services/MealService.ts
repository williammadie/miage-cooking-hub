import { AxiosResponse } from "axios";
import IRecipeService from "./IRecipeService";
import FullRecipeDTO from "../dto/FullRecipeDTO";
import PreviewRecipeDTO from "../dto/PreviewRecipeDTO";
import MealRoutesAPI from "./MealRoutesAPI";
import FullMealMapper from "../mappers/FullMealMapper";
import PreviewMealMapper from "../mappers/PreviewMealMapper";
import DataDbApiOperations from "./DataDbApiOperations";

class MealService extends DataDbApiOperations implements IRecipeService {
  async getRandomRecipe(): Promise<FullRecipeDTO> {
    const response: AxiosResponse = await MealService.retrieveFullRecipe(
      MealRoutesAPI.RANDOM_MEAL
    );
    return FullMealMapper.toDto(response.data.meals[0]);
  }

  async getFullRecipeById(id: string): Promise<FullRecipeDTO> {
    const response: AxiosResponse = await MealService.retrieveFullRecipe(
      MealRoutesAPI.MEAL_BY_ID,
      id
    );
    return FullMealMapper.toDto(response.data.meals[0]);
  }

  async getRecipesByName(name: string): Promise<PreviewRecipeDTO[]> {
    const response: AxiosResponse = await MealService.retrieveRecipes(
      MealRoutesAPI.MEAL_BY_NAME,
      name
    );
    return PreviewMealMapper.toDtos(response.data.meals);
  }

  async getRecipesByMainIngredientName(
    name: string
  ): Promise<PreviewRecipeDTO[]> {
    const response: AxiosResponse = await MealService.retrieveRecipes(
      MealRoutesAPI.MEAL_BY_MAIN_INGREDIENT,
      name
    );
    return PreviewMealMapper.toDtos(response.data.meals);
  }
}

export default MealService;
