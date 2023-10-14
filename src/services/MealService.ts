import axios, { AxiosResponse } from "axios";
import { RandomMealDTO } from "../dto/RandomMealDTO";

const MealService = {
  getRandomMeal: async function () {
    let response: AxiosResponse | undefined = undefined;
    try {
      response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }

    if (response === undefined) throw Error("No Response from url");

    return new RandomMealDTO(response.data.meals[0]);
  },
};

export default MealService;
