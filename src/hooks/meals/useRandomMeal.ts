import { useEffect, useState } from "react";
import { AxiosResponse } from "axios";
import FullRecipeDTO from "../../dto/FullRecipeDTO";
import { retrieveFullRecipe } from "../../api/datadb";
import {
  DATA_DB_PREFIX,
  DATA_DB_ROUTES,
  buildURL,
} from "../../constants/RouteBuilder";
import FullMealMapper from "../../mappers/FullMealMapper";

export const useRandomMeal = () => {
  const [dataM, setData] = useState<FullRecipeDTO | null>(null);
  const [isLoadingM, setIsLoading] = useState(true);
  const [errorM, setError] = useState<unknown | null>(null);

  const fetchData = async () => {
    try {
      const response: AxiosResponse = await retrieveFullRecipe(
        buildURL(DATA_DB_PREFIX.MEAL, DATA_DB_ROUTES.RANDOM_RECIPE)
      );
      setData(FullMealMapper.toDto(response.data.meals[0]));
    } catch (err) {
      setError(err);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { dataM, isLoadingM, errorM };
};
