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

export const useCocktailsByName = (name: string) => {
  const [data, setData] = useState<PreviewRecipeDTO[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown | null>(null);

  const fetchData = async (name: string) => {
    setIsLoading(true);
    try {
      const response: AxiosResponse = await retrieveRecipes(
        buildURL(DATA_DB_PREFIX.COCKTAIL, DATA_DB_ROUTES.RECIPE_BY_NAME),
        name
      );
      setData(PreviewDrinkMapper.toDtos(response.data.drinks));
    } catch (err) {
      setError(err);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchData(name);
  }, [name]);

  return { data, isLoading, error };
};
