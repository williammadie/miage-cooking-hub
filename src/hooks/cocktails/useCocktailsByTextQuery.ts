import { useEffect, useState } from "react";
import { retrieveRecipes } from "../../api/datadb";
import {
  DATA_DB_PREFIX,
  DATA_DB_ROUTES,
  buildURL,
} from "../../constants/RouteBuilder";
import PreviewRecipeDTO from "../../dto/PreviewRecipeDTO";
import { AxiosResponse } from "axios";
import PreviewDrinkMapper from "../../mappers/PreviewDrinkMapper";

export const useCocktailsByName = (
  name: string,
  searchByIngredient: boolean
) => {
  const [data, setData] = useState<PreviewRecipeDTO[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown | null>(null);

  const fetchData = async (name: string, searchByIngredient: boolean) => {
    const route = searchByIngredient
      ? DATA_DB_ROUTES.RECIPE_BY_MAIN_INGREDIENT
      : DATA_DB_ROUTES.RECIPE_BY_NAME;
    name = name === "" && searchByIngredient ? "ice" : name;
    try {
      const response: AxiosResponse = await retrieveRecipes(
        buildURL(DATA_DB_PREFIX.COCKTAIL, route),
        name
      );
      setData(PreviewDrinkMapper.toDtos(response.data.drinks));
    } catch (err) {
      setError(err);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData(name, searchByIngredient);
  }, [name, searchByIngredient]);

  return { data, isLoading, error };
};
