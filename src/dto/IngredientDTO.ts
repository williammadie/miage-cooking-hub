export class IngredientDTO {
    ingredient: string;
    measure: string;

    constructor(ingredient: string, measure: string) {
        this.ingredient = ingredient;
        this.measure = measure;
    }
}
