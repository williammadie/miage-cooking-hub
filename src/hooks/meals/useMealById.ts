import { useEffect, useState } from "react";
import {
  DATA_DB_PREFIX,
  DATA_DB_ROUTES,
  buildURL,
} from "../../constants/RouteBuilder";
import { AxiosResponse } from "axios";
import { retrieveFullRecipe } from "../../services/DataDbService";
import FullRecipeDTO from "../../dto/FullRecipeDTO";
import FullMealMapper from "../../mappers/FullMealMapper";

export const useMealById = (id: string) => {
  const [data, setData] = useState<FullRecipeDTO | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown | null>(null);

  const fetchData = async (id: string) => {
    setIsLoading(true);

    try {
      const response: AxiosResponse = await retrieveFullRecipe(
        buildURL(DATA_DB_PREFIX.MEAL, DATA_DB_ROUTES.RECIPE_BY_ID),
        id
      );
      setData(FullMealMapper.toDto(response.data.meals[0]));
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    fetchData(id);
  }, [id]);

  return { data, isLoading, error };
};
