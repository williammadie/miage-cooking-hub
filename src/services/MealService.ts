import { AxiosResponse } from "axios";
import FullRecipeDTO from "../dto/FullRecipeDTO";
import PreviewRecipeDTO from "../dto/PreviewRecipeDTO";
import FullMealMapper from "../mappers/FullMealMapper";
import PreviewMealMapper from "../mappers/PreviewMealMapper";
import { retrieveFullRecipe, retrieveRecipes } from "./DataDbService";
import {
  buildURL,
  DATA_DB_PREFIX,
  DATA_DB_ROUTES,
} from "../constants/RouteBuilder";

const FIRST_ELEMENT: number = 0;

const MealService = {
  getRandomRecipe: async function (): Promise<FullRecipeDTO> {
    const response: AxiosResponse = await retrieveFullRecipe(
      buildURL(DATA_DB_PREFIX.MEAL, DATA_DB_ROUTES.RANDOM_RECIPE)
    );
    return FullMealMapper.toDto(response.data.meals[FIRST_ELEMENT]);
  },

  getFullRecipeById: async function (id: string): Promise<FullRecipeDTO> {
    const response: AxiosResponse = await retrieveFullRecipe(
      buildURL(DATA_DB_PREFIX.MEAL, DATA_DB_ROUTES.RECIPE_BY_ID),
      id
    );
    return FullMealMapper.toDto(response.data.meals[FIRST_ELEMENT]);
  },

  getRecipesByName: async function (name: string): Promise<PreviewRecipeDTO[]> {
    const response: AxiosResponse = await retrieveRecipes(
      buildURL(DATA_DB_PREFIX.MEAL, DATA_DB_ROUTES.RECIPE_BY_NAME),
      name
    );
    return PreviewMealMapper.toDtos(response.data.meals);
  },

  getRecipesByMainIngredientName: async function (
    name: string
  ): Promise<PreviewRecipeDTO[]> {
    const response: AxiosResponse = await retrieveRecipes(
      buildURL(DATA_DB_PREFIX.MEAL, DATA_DB_ROUTES.RECIPE_BY_MAIN_INGREDIENT),
      name
    );
    return PreviewMealMapper.toDtos(response.data.meals);
  },
};

export default MealService;
