import { useEffect, useState } from "react";
import { AxiosResponse } from "axios";
import FullRecipeDTO from "../../dto/FullRecipeDTO";
import FullDrinkMapper from "../../mappers/FullDrinkMapper";
import { retrieveFullRecipe } from "../../api/datadb";
import {
  DATA_DB_PREFIX,
  DATA_DB_ROUTES,
  buildURL,
} from "../../constants/RouteBuilder";

export const useRandomCocktail = () => {
  const [data, setData] = useState<FullRecipeDTO | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown | null>(null);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response: AxiosResponse = await retrieveFullRecipe(
        buildURL(DATA_DB_PREFIX.COCKTAIL, DATA_DB_ROUTES.RANDOM_RECIPE)
      );
      setData(FullDrinkMapper.toDto(response.data.drinks[0]));
    } catch (err) {
      setError(err);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, isLoading, error };
};
