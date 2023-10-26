import {IngredientDTO} from "./IngredientDTO";

class FullRecipeDTO {
  static  NUMBER_INGREDIENT = 20; // Max ingredient = strIngredient20


  id: string;
  name: string;
  instruction: string;
  area: string;
  category: string;
  thumbnailUrl: string;
  youtubeRecipe: string;
  tags: string[];
  source: string;
  ingredients: IngredientDTO[];

  constructor(
    id: string,
    name: string,
    description: string,
    area: string,
    category: string,
    thumbnailUrl: string,
    youtubeRecipe: string,
    tag: string[],
    source: string,
    data: any
  ) {
    this.id = id;
    this.name = name;
    this.instruction = description;
    this.area = area;
    this.category = category;
    this.thumbnailUrl = thumbnailUrl;
    this.youtubeRecipe = youtubeRecipe;
    this.tags = tag;
    this.source = source;
    this.ingredients = this.extractIngredients(data);
  }
  private extractIngredients(data: any): IngredientDTO[] {
    const ingredients: IngredientDTO[] = [];
    for (let i = 1; i <= FullRecipeDTO.NUMBER_INGREDIENT ; i++) {
      const ingredientKey = `strIngredient${i}`;
      const measureKey = `strMeasure${i}`;
      if (data[ingredientKey]) {
        ingredients.push(new IngredientDTO(data[ingredientKey], data[measureKey]));
      }
    }
    return ingredients;
  }
}

export default FullRecipeDTO;
