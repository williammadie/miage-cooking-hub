import { useEffect, useState } from "react";
import { retrieveRecipes } from "../../api/datadb";
import {
  DATA_DB_PREFIX,
  DATA_DB_ROUTES,
  buildURL,
} from "../../constants/RouteBuilder";
import PreviewRecipeDTO from "../../dto/PreviewRecipeDTO";
import { AxiosResponse } from "axios";
import PreviewMealMapper from "../../mappers/PreviewMealMapper";

export const useMealsByName = (name: string, searchByIngredient: boolean) => {
  const [data, setData] = useState<PreviewRecipeDTO[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown | null>(null);

  const fetchData = async (name: string, searchByIngredient: boolean) => {
    const route = searchByIngredient
      ? DATA_DB_ROUTES.RECIPE_BY_MAIN_INGREDIENT
      : DATA_DB_ROUTES.RECIPE_BY_NAME;
    try {
      const response: AxiosResponse = await retrieveRecipes(
        buildURL(DATA_DB_PREFIX.MEAL, route),
        name
      );
      setData(PreviewMealMapper.toDtos(response.data.meals));
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
