import { AxiosResponse } from "axios";
import FullRecipeDTO from "../dto/FullRecipeDTO";
import PreviewRecipeDTO from "../dto/PreviewRecipeDTO";
import { retrieveFullRecipe, retrieveRecipes } from "./DataDbService";
import {
  buildURL,
  DATA_DB_PREFIX,
  DATA_DB_ROUTES,
} from "../constants/RouteBuilder";
import FullDrinkMapper from "../mappers/FullDrinkMapper";
import PreviewDrinkMapper from "../mappers/PreviewDrinkMapper";

const FIRST_ELEMENT: number = 0;

const CocktailService = {
  getRandomRecipe: async function (): Promise<FullRecipeDTO> {
    const response: AxiosResponse = await retrieveFullRecipe(
      buildURL(DATA_DB_PREFIX.COCKTAIL, DATA_DB_ROUTES.RANDOM_RECIPE)
    );
    return FullDrinkMapper.toDto(response.data.drinks[FIRST_ELEMENT]);
  },

  getFullRecipeById: async function (id: string): Promise<FullRecipeDTO> {
    const response: AxiosResponse = await retrieveFullRecipe(
      buildURL(DATA_DB_PREFIX.COCKTAIL, DATA_DB_ROUTES.RECIPE_BY_ID),
      id
    );
    return FullDrinkMapper.toDto(response.data.drinks[FIRST_ELEMENT]);
  },

  getRecipesByName: async function (name: string): Promise<PreviewRecipeDTO[]> {
    const response: AxiosResponse = await retrieveRecipes(
      buildURL(DATA_DB_PREFIX.COCKTAIL, DATA_DB_ROUTES.RECIPE_BY_NAME),
      name
    );
    return PreviewDrinkMapper.toDtos(response.data.drinks);
  },

  getRecipesByMainIngredientName: async function (
    name: string
  ): Promise<PreviewRecipeDTO[]> {
    const response: AxiosResponse = await retrieveRecipes(
      buildURL(
        DATA_DB_PREFIX.COCKTAIL,
        DATA_DB_ROUTES.RECIPE_BY_MAIN_INGREDIENT
      ),
      name
    );
    return PreviewDrinkMapper.toDtos(response.data.drinks);
  },
};

export default CocktailService;
