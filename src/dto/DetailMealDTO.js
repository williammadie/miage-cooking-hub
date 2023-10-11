class DetailMealDTO {
    idMeal;
    strMeal;
    strCategory;
    strArea;
    strInstructions;
    strMealThumb;
    strTags;
    strYoutube;
    strSource;
    ingredients;

    constructor(data) {
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

    extractIngredients(data) {
        const ingredients = [];
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

 class IngredientDTO {
    ingredient;
    measure;

    constructor(ingredient, measure) {
        this.ingredient = ingredient;
        this.measure = measure;
    }
}