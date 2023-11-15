import { useEffect, useState } from "react";
import {
  DATA_DB_PREFIX,
  DATA_DB_ROUTES,
  buildURL,
} from "../../constants/RouteBuilder";
import { AxiosResponse } from "axios";
import { retrieveFullRecipe } from "../../api/datadb";
import FullDrinkMapper from "../../mappers/FullDrinkMapper";
import FullRecipeDTO from "../../dto/FullRecipeDTO";
export const useCocktailById = (id: string) => {
  const [data, setData] = useState<FullRecipeDTO | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown | null>(null);

  const fetchData = async (id: string) => {
    try {
      const response: AxiosResponse = await retrieveFullRecipe(
        buildURL(DATA_DB_PREFIX.COCKTAIL, DATA_DB_ROUTES.RECIPE_BY_ID),
        id
      );
      setData(FullDrinkMapper.toDto(response.data.drinks[0]));
    } catch (err) {
      setError(err);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchData(id);
  }, [id]);

  return { data, isLoading, error };
};
