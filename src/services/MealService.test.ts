import axios, { HttpStatusCode } from "axios";
import MockAdapter from "axios-mock-adapter";
import MealService from "./MealService";
import FullRecipeDTO from "../dto/FullRecipeDTO";
import PreviewRecipeDTO from "../dto/PreviewRecipeDTO";
import {
  DATA_DB_PREFIX,
  DATA_DB_ROUTES,
  buildURL,
} from "../constants/RouteBuilder";

describe("MealService", () => {
  const mock: MockAdapter = new MockAdapter(axios);
  const FIRST_ELEMENT: number = 0;
  const SECOND_ELEMENT: number = 1;

  afterEach(() => {
    mock.reset();
  });

  it("should get a random recipe", async () => {
    mock
      .onGet(buildURL(DATA_DB_PREFIX.MEAL, DATA_DB_ROUTES.RANDOM_RECIPE))
      .reply(HttpStatusCode.Ok, {
        meals: [
          {
            idMeal: "52787",
            strMeal: "Hot Chocolate Fudge",
            strInstructions:
              "Line an 8-inch-square baking pan with wax paper or foil, and coat with non-stick spray.\r\nIn a microwave-safe bowl, combine the dark chocolate chips, heavy cream and half of the sweetened condensed milk. Microwave the dark chocolate mixture in 20-second intervals, stirring in between each interval, until the chocolate is melted.\r\nAdd the vanilla extract to the dark chocolate mixture and stir well until smooth.\r\nTransfer the dark chocolate mixture into the prepared pan and spread into an even layer.\r\nIn a separate bowl, combine the white chocolate chips with the remaining half of the sweetened condensed milk. Microwave the white chocolate mixture in 20-second intervals, stirring in between each interval, until the chocolate is melted.\r\nEvenly spread the white chocolate mixture on top of dark chocolate layer.\r\nTop the chocolate layers with the Mallow Bits or miniature marshmallows, and gently press them down.\r\nRefrigerate for 4 hours, or until set.\r\nRemove the fudge and wax paper from the pan. Carefully peel all of the wax paper from the fudge.\r\nCut the fudge into bite-sized pieces and serve.",
            strArea: "American",
            strCategory: "Dessert",
            strMealThumb:
              "https://www.themealdb.com/images/media/meals/xrysxr1483568462.jpg",
            strYoutube: "https://www.youtube.com/watch?v=oJvbsVSblfk",
            strTags: "Snack,Chocolate",
            strIngredient1: "Chocolate Chips",
            strIngredient2: "Heavy Cream",
            strIngredient3: "Condensed Milk",
            strMeasure1: "2 cups",
            strMeasure2: "2 tbs",
            strMeasure3: "1 - 14 ounce can",
          },
        ],
      });
    const result: FullRecipeDTO = await MealService.getRandomRecipe();
    expect(result.id).toBe("52787");
    expect(result.name).toBe("Hot Chocolate Fudge");
    expect(result.instructions).toBe(
      "Line an 8-inch-square baking pan with wax paper or foil, and coat with non-stick spray.\r\nIn a microwave-safe bowl, combine the dark chocolate chips, heavy cream and half of the sweetened condensed milk. Microwave the dark chocolate mixture in 20-second intervals, stirring in between each interval, until the chocolate is melted.\r\nAdd the vanilla extract to the dark chocolate mixture and stir well until smooth.\r\nTransfer the dark chocolate mixture into the prepared pan and spread into an even layer.\r\nIn a separate bowl, combine the white chocolate chips with the remaining half of the sweetened condensed milk. Microwave the white chocolate mixture in 20-second intervals, stirring in between each interval, until the chocolate is melted.\r\nEvenly spread the white chocolate mixture on top of dark chocolate layer.\r\nTop the chocolate layers with the Mallow Bits or miniature marshmallows, and gently press them down.\r\nRefrigerate for 4 hours, or until set.\r\nRemove the fudge and wax paper from the pan. Carefully peel all of the wax paper from the fudge.\r\nCut the fudge into bite-sized pieces and serve."
    );
    expect(result.area).toBe("American");
    expect(result.category).toBe("Dessert");
    expect(result.thumbnailUrl).toBe(
      "https://www.themealdb.com/images/media/meals/xrysxr1483568462.jpg"
    );
    expect(result.youtubeRecipe).toBe(
      "https://www.youtube.com/watch?v=oJvbsVSblfk"
    );
    expect(result.tags).toStrictEqual(["Snack", "Chocolate"]);
    expect(result.ingredients).toStrictEqual([
      { ingredient: "Chocolate Chips", measure: "2 cups" },
      { ingredient: "Heavy Cream", measure: "2 tbs" },
      { ingredient: "Condensed Milk", measure: "1 - 14 ounce can" },
    ]);
  });

  it("should get a full recipe by ID", async () => {
    mock
      .onGet(
        `${buildURL(DATA_DB_PREFIX.MEAL, DATA_DB_ROUTES.RECIPE_BY_ID)}52787`
      )
      .reply(HttpStatusCode.Ok, {
        meals: [
          {
            idMeal: "52787",
            strMeal: "Hot Chocolate Fudge",
            strInstructions:
              "Line an 8-inch-square baking pan with wax paper or foil, and coat with non-stick spray.\r\nIn a microwave-safe bowl, combine the dark chocolate chips, heavy cream and half of the sweetened condensed milk. Microwave the dark chocolate mixture in 20-second intervals, stirring in between each interval, until the chocolate is melted.\r\nAdd the vanilla extract to the dark chocolate mixture and stir well until smooth.\r\nTransfer the dark chocolate mixture into the prepared pan and spread into an even layer.\r\nIn a separate bowl, combine the white chocolate chips with the remaining half of the sweetened condensed milk. Microwave the white chocolate mixture in 20-second intervals, stirring in between each interval, until the chocolate is melted.\r\nEvenly spread the white chocolate mixture on top of dark chocolate layer.\r\nTop the chocolate layers with the Mallow Bits or miniature marshmallows, and gently press them down.\r\nRefrigerate for 4 hours, or until set.\r\nRemove the fudge and wax paper from the pan. Carefully peel all of the wax paper from the fudge.\r\nCut the fudge into bite-sized pieces and serve.",
            strArea: "American",
            strCategory: "Dessert",
            strMealThumb:
              "https://www.themealdb.com/images/media/meals/xrysxr1483568462.jpg",
            strYoutube: "https://www.youtube.com/watch?v=oJvbsVSblfk",
            strTags: "Snack,Chocolate",
            strIngredient1: "Chocolate Chips",
            strIngredient2: "Heavy Cream",
            strIngredient3: "Condensed Milk",
            strMeasure1: "2 cups",
            strMeasure2: "2 tbs",
            strMeasure3: "1 - 14 ounce can",
          },
        ],
      });
    const result: FullRecipeDTO = await MealService.getFullRecipeById("52787");
    expect(result.id).toBe("52787");
    expect(result.name).toBe("Hot Chocolate Fudge");
    expect(result.instructions).toBe(
      "Line an 8-inch-square baking pan with wax paper or foil, and coat with non-stick spray.\r\nIn a microwave-safe bowl, combine the dark chocolate chips, heavy cream and half of the sweetened condensed milk. Microwave the dark chocolate mixture in 20-second intervals, stirring in between each interval, until the chocolate is melted.\r\nAdd the vanilla extract to the dark chocolate mixture and stir well until smooth.\r\nTransfer the dark chocolate mixture into the prepared pan and spread into an even layer.\r\nIn a separate bowl, combine the white chocolate chips with the remaining half of the sweetened condensed milk. Microwave the white chocolate mixture in 20-second intervals, stirring in between each interval, until the chocolate is melted.\r\nEvenly spread the white chocolate mixture on top of dark chocolate layer.\r\nTop the chocolate layers with the Mallow Bits or miniature marshmallows, and gently press them down.\r\nRefrigerate for 4 hours, or until set.\r\nRemove the fudge and wax paper from the pan. Carefully peel all of the wax paper from the fudge.\r\nCut the fudge into bite-sized pieces and serve."
    );
    expect(result.area).toBe("American");
    expect(result.category).toBe("Dessert");
    expect(result.thumbnailUrl).toBe(
      "https://www.themealdb.com/images/media/meals/xrysxr1483568462.jpg"
    );
    expect(result.youtubeRecipe).toBe(
      "https://www.youtube.com/watch?v=oJvbsVSblfk"
    );
    expect(result.tags).toStrictEqual(["Snack", "Chocolate"]);
    expect(result.ingredients).toStrictEqual([
      { ingredient: "Chocolate Chips", measure: "2 cups" },
      { ingredient: "Heavy Cream", measure: "2 tbs" },
      { ingredient: "Condensed Milk", measure: "1 - 14 ounce can" },
    ]);
  });

  it("should get recipes by name", async () => {
    mock
      .onGet(
        `${buildURL(DATA_DB_PREFIX.MEAL, DATA_DB_ROUTES.RECIPE_BY_NAME)}chicken`
      )
      .reply(HttpStatusCode.Ok, {
        meals: [
          {
            idMeal: "52787",
            strMeal: "Hot Chocolate Fudge",
            strMealThumb:
              "https://www.themealdb.com/images/media/meals/xrysxr1483568462.jpg",
          },
          {
            idMeal: "52795",
            strMeal: "Chicken Handi",
            strMealThumb:
              "https://www.themealdb.com/images/media/meals/wyxwsp1486979827.jpg",
          },
        ],
      });
    const results: PreviewRecipeDTO[] = await MealService.getRecipesByName(
      "chicken"
    );

    expect(results[FIRST_ELEMENT].id).toBe("52787");
    expect(results[FIRST_ELEMENT].name).toBe("Hot Chocolate Fudge");
    expect(results[FIRST_ELEMENT].thumbnailUrl).toBe(
      "https://www.themealdb.com/images/media/meals/xrysxr1483568462.jpg"
    );

    expect(results[SECOND_ELEMENT].id).toBe("52795");
    expect(results[SECOND_ELEMENT].name).toBe("Chicken Handi");
    expect(results[SECOND_ELEMENT].thumbnailUrl).toBe(
      "https://www.themealdb.com/images/media/meals/wyxwsp1486979827.jpg"
    );
  });
});
