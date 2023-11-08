import { useEffect, useState } from "react";
import { AxiosResponse } from "axios";
import FullRecipeDTO from "../../dto/FullRecipeDTO";
import { retrieveFullRecipe } from "../../services/DataDbService";
import {
  DATA_DB_PREFIX,
  DATA_DB_ROUTES,
  buildURL,
} from "../../constants/RouteBuilder";
import FullMealMapper from "../../mappers/FullMealMapper";

export const useRandomMeal = () => {
  const [data, setData] = useState<FullRecipeDTO | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);

    const response: AxiosResponse = await retrieveFullRecipe(
      buildURL(DATA_DB_PREFIX.MEAL, DATA_DB_ROUTES.RANDOM_RECIPE)
    );
    setData(FullMealMapper.toDto(response.data.meals[0]));

    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, isLoading };
};
