import { useEffect, useState } from "react";
import { retrieveRecipes } from "../../api/datadb";
import { OPEN_FOOD_FACTS } from "../../constants/RouteBuilder";
import { AxiosResponse } from "axios";
import NutritionInformationMapper from "../../mappers/NutritionInformationMappper";
import NutritionInfoDTO from "../../dto/NutritionInfoDTO";

export const useNutritionInfo = (name: string) => {
  const [data, setData] = useState<NutritionInfoDTO[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown | null>(null);

  const fetchData = async (name: string) => {
    setIsLoading(true);
    try {
      const response: AxiosResponse = await retrieveRecipes(
        OPEN_FOOD_FACTS.NUTRITION_BY_BRAND,
        name
      );
      setData(NutritionInformationMapper.toDtos(response.data.products));
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
