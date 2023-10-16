import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import MealService from "./MealService";
import MealRoutesAPI from "./MealRoutesAPI";
import FullRecipeDTO from "../dto/FullRecipeDTO";
import PreviewRecipeDTO from "../dto/PreviewRecipeDTO";

describe("MealService", () => {
  const mock = new MockAdapter(axios);
  const mealService = new MealService();

  afterEach(() => {
    mock.reset();
  });

  it("should get a random recipe", async () => {
    mock.onGet(MealRoutesAPI.RANDOM_MEAL).reply(200, {
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
        },
      ],
    });
    let result: FullRecipeDTO = await mealService.getRandomRecipe();
    expect(result.id).toBe("52787");
    expect(result.name).toBe("Hot Chocolate Fudge");
    expect(result.description).toBe(
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
  });

  it("should get a full recipe by ID", async () => {
    mock.onGet(`${MealRoutesAPI.MEAL_BY_ID}52787`).reply(200, {
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
        },
      ],
    });
    let result: FullRecipeDTO = await mealService.getFullRecipeById("52787");
    expect(result.id).toBe("52787");
    expect(result.name).toBe("Hot Chocolate Fudge");
    expect(result.description).toBe(
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
  });

  it("should get recipes by name", async () => {
    mock.onGet(`${MealRoutesAPI.MEAL_BY_NAME}chicken`).reply(200, {
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
    let results: PreviewRecipeDTO[] = await mealService.getRecipesByName(
      "chicken"
    );

    expect(results[0].id).toBe("52787");
    expect(results[0].name).toBe("Hot Chocolate Fudge");
    expect(results[0].thumbnailUrl).toBe(
      "https://www.themealdb.com/images/media/meals/xrysxr1483568462.jpg"
    );

    expect(results[1].id).toBe("52795");
    expect(results[1].name).toBe("Chicken Handi");
    expect(results[1].thumbnailUrl).toBe(
      "https://www.themealdb.com/images/media/meals/wyxwsp1486979827.jpg"
    );
  });

  // Add similar tests for other methods
});
