import { IngredientDTO } from "./IngredientDTO";

export class DetailMealDTO {
    idMeal: number;
    strMeal: string;
    strCategory: string;
    strArea: string;
    strInstructions: string;
    strMealThumb: string;
    strTags: string;
    strYoutube: string;
    strSource: string;
    ingredients: IngredientDTO[];

    constructor(data: any) {
        this.idMeal = data.idMeal;
        this.strMeal = data.strMeal;
        this.strCategory = data.strCategory;
        this.strArea = data.strArea;
        this.strInstructions = data.strInstructions;
        this.strMealThumb = data.strMealThumb;
        this.strTags = data.strTags;
        this.strYoutube = data.strYoutube;
        this.strSource = data.strSource;

        this.ingredients = this.extractIngredients(data);
    }

    private extractIngredients(data: any): IngredientDTO[] {
        const ingredients: IngredientDTO[] = [];
        for (let i = 1; i <= 20; i++) {
            const ingredientKey = `strIngredient${i}`;
            const measureKey = `strMeasure${i}`;
            if (data[ingredientKey]) {
                ingredients.push(new IngredientDTO(data[ingredientKey], data[measureKey]));
            }
        }
        return ingredients;
    }
}