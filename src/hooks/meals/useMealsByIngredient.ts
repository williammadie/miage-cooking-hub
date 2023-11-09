import { useEffect, useState } from "react";
import {
  DATA_DB_PREFIX,
  DATA_DB_ROUTES,
  buildURL,
} from "../../constants/RouteBuilder";
import PreviewRecipeDTO from "../../dto/PreviewRecipeDTO";
import { AxiosResponse } from "axios";
import { retrieveRecipes } from "../../api/datadb";
import PreviewMealMapper from "../../mappers/PreviewMealMapper";

export const useMealsByIngredient = (name: string) => {
  const [data, setData] = useState<PreviewRecipeDTO[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown | null>(null);

  const fetchData = async (name: string) => {
    setIsLoading(true);

    try {
      const response: AxiosResponse = await retrieveRecipes(
        buildURL(DATA_DB_PREFIX.MEAL, DATA_DB_ROUTES.RECIPE_BY_MAIN_INGREDIENT),
        name
      );
      setData(PreviewMealMapper.toDtos(response.data.meals));
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
