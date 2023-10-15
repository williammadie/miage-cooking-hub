import axios, { AxiosResponse } from "axios";
import IRecipeService from "./IRecipeService";
import FullRecipeDTO from "../dto/FullRecipeDTO";
import PreviewRecipeDTO from "../dto/PreviewRecipeDTO";
import MealRoutesAPI from "./MealRoutesAPI";
import FullMealMapper from "../mappers/FullMealMapper";
import PreviewMealMapper from "../mappers/PreviewMealMapper";

class MealService implements IRecipeService {
  async getRandomRecipe(): Promise<FullRecipeDTO> {
    let response: AxiosResponse | undefined = undefined;
    try {
      response = await axios.get(
        MealRoutesAPI.RANDOM_MEAL
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }

    if (response === undefined) throw Error("No Response from url");

    return FullMealMapper.toDto(response.data.meals[0]);
  }

  async getRecipesByName(name: string): Promise<PreviewRecipeDTO[]> {
    let response: AxiosResponse | undefined = undefined;
    try {
      response = await axios.get(`${MealRoutesAPI.MEAL_BY_NAME}${name}`);
      console.log(response);
    } catch (error) {
      console.error(error);
    }

    if (response === undefined) throw Error("No Response from url");

    return PreviewMealMapper.toDtos(response.data.meals);
  }

  getRecipesByMainIngredientName(name: string): Promise<PreviewRecipeDTO[]> {
    throw new Error("Method not implemented.");
  }

  getFullRecipeById(name: string): Promise<FullRecipeDTO> {
    throw new Error("Method not implemented.");
  }

  getRecipeByName(name: string) {
    throw new Error("Method not implemented.");
  }

  getRecipeByMainIngredientName(name: string) {
    throw new Error("Method not implemented.");
  }
};

export default MealService;
