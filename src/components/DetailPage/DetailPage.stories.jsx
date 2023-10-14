import React from 'react';
import {DetailMealDTO, IngredientDTO} from '../../dto/DetailMealDTO';
import DetailPage from "./DetailPage";

export default {
    component: DetailPage,
    title: 'component/DetailPage'
};

const Template = (args) => <DetailPage {...args} />

export  const Default = Template.bind({});

Default.args = new DetailMealDTO({
    "idMeal": "52880",
    "strMeal": "McSinghs Scotch pie",
    "strDrinkAlternate": null,
    "strCategory": "Lamb",
    "strArea": "British",
    "strInstructions": "Heat a large frying pan and toast the cumin seeds for a few minutes, then set aside. Heat the oil in the same pan and fry the onion, garlic, chilli, pepper and a good pinch of salt for around eight minutes, until there is no moisture left. Remove from the heat, stir in the toasted cumin seeds, ground mace (or nutmeg) and ground coriander. Leave to cool.\r\nIn a large bowl mix together the minced lamb, white pepper, fresh coriander, and the cooled spiced onion mixture until combined. Set aside, covered, in the fridge.\r\nPreheat the oven to 200C/400F/Gas 6 and generously grease a 20cm/8in diameter loose-bottomed or springform round cake tin with lard.\r\nTo make the pastry, sift the flour and salt in a large bowl and make a well in the centre.\r\nPut the milk, lard and 90ml/3fl oz of water in a saucepan and heat gently. When the lard has melted, increase the heat and bring to the boil.\r\nPour the boiling liquid into the flour, and use a wooden spoon to combine until cool enough to handle. Bring together into a ball.\r\nDust a work surface with flour and, working quickly, knead the dough briefly – it will be soft and moist. Set aside a third of the pastry and roll the rest out on a well-floured surface. Line the pie dish with the pastry, pressing it right up the sides until it pokes just over the top of the tin.\r\nAdd the filling into the pastry-lined tin bit by bit. As you reach the top, form a slight peak. Roll out the reserved pastry and top the pie with it. Pinch the edges to seal and trim the excess. Poke a hole in the top of the pie and insert a small tube made from aluminium foil to allow steam to escape.\r\nBrush the top of the pie with a little beaten egg yolk, and bake in the preheated oven for 30 minutes (put a tray on the shelf below to catch any drips). Then reduce the temperature to 160C/325F/Gas 3 and cook for a further 1¼ hours until golden-brown. Leave to cool completely before refrigerating for two hours, or overnight.\r\nRun a knife around the edge of the pie, remove from the tin and serve with chutneys, salads or pickles.",
    "strMealThumb": "https://www.themealdb.com/images/media/meals/vssrtx1511557680.jpg",
    "strTags": "Pie",
    "strYoutube": "https://www.youtube.com/watch?v=1nArqhRyszw",
    "strIngredient1": "Cumin",
    "strIngredient2": "Rapeseed Oil",
    "strIngredient3": "Red Onions",
    "strIngredient4": "Garlic Clove",
    "strIngredient5": "Green Chilli",
    "strIngredient6": "Red Pepper",
    "strIngredient7": "Nutmeg",
    "strIngredient8": "Coriander",
    "strIngredient9": "Lamb Mince",
    "strIngredient10": "Pepper",
    "strIngredient11": "Coriander",
    "strIngredient12": "Plain Flour",
    "strIngredient13": "Salt",
    "strIngredient14": "Milk",
    "strIngredient15": "Lard",
    "strIngredient16": "Egg Yolks",
    "strIngredient17": "",
    "strIngredient18": "",
    "strIngredient19": "",
    "strIngredient20": "",
    "strMeasure1": "2 tsp",
    "strMeasure2": "1 tbs",
    "strMeasure3": "2 finely chopped",
    "strMeasure4": "6",
    "strMeasure5": "3 finely chopped",
    "strMeasure6": "1 finely chopped ",
    "strMeasure7": "1 tsp ",
    "strMeasure8": "2 tsp",
    "strMeasure9": "1kg",
    "strMeasure10": "1 tsp ",
    "strMeasure11": "3 tbs",
    "strMeasure12": "340g",
    "strMeasure13": "½ tsp",
    "strMeasure14": "90 ml ",
    "strMeasure15": "150g",
    "strMeasure16": "Beaten",
    "strMeasure17": "",
    "strMeasure18": "",
    "strMeasure19": "",
    "strMeasure20": "",
    "strSource": "https://www.bbc.co.uk/food/recipes/mcsinghs_scotch_pie_98356",
    "strImageSource": null,
    "strCreativeCommonsConfirmed": null,
    "dateModified": null
});



    /*{
    idMeal: "52978",
    strMeal: "Kumpir",
    strCategory: "Side",
    strArea: "Turkish",
    strInstructions: "If you order kumpir in Turkey, the standard filling is first, lots of butter mashed into the potato, followed by cheese. There’s then a row of other toppings that you can just point at to your heart’s content – sweetcorn, olives, salami, coleslaw, Russian salad, allsorts – and you walk away with an over-stuffed potato because you got ever-excited by the choices on offer.\r\n\r\nGrate (roughly – you can use as much as you like) 150g of cheese.\r\nFinely chop one onion and one sweet red pepper.\r\nPut these ingredients into a large bowl with a good sprinkling of salt and pepper, chilli flakes (optional).",
    strMealThumb: "https://www.themealdb.com/images/media/meals/mlchx21564916997.jpg",
    strTags: "SideDish",
    strYoutube: "https://www.youtube.com/watch?v=IEDEtZ4UVtI",
    strSource: "http://www.turkeysforlife.com/2013/10/firinda-kumpir-turkish-street-food.html",
    ingredients: [
        new IngredientDTO("Potatoes", "2 large"),
        new IngredientDTO("Butter", "2 tbs"),
        new IngredientDTO("Cheese", "150g"),
        new IngredientDTO("Onion", "1 large"),
        new IngredientDTO("Red Pepper", "1 large"),
        new IngredientDTO("Red Chile Flakes", "Pinch"),
    ],
}*/
