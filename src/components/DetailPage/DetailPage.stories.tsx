import React from "react";
import DetailPage, { FullRecipe } from "./DetailPage";
import { Meta, StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import FullMealMapper from "../../mappers/FullMealMapper";
import FullDrinkMapper from "../../mappers/FullDrinkMapper";

export default {
  component: DetailPage,
  title: "component/DetailPage",
} as Meta;

const Template: StoryFn<FullRecipe> = (args: FullRecipe) => (
  <BrowserRouter>
    <DetailPage {...args} />
  </BrowserRouter>
);

export const Default = Template.bind({});

Default.args = FullMealMapper.toDto({
  idMeal: "52880",
  strMeal: "McSinghs Scotch pie",
  strDrinkAlternate: null,
  strCategory: "Lamb",
  strArea: "British",
  strInstructions:
    "Heat a large frying pan and toast the cumin seeds for a few minutes, then set aside. Heat the oil in the same pan and fry the onion, garlic, chilli, pepper and a good pinch of salt for around eight minutes, until there is no moisture left. Remove from the heat, stir in the toasted cumin seeds, ground mace (or nutmeg) and ground coriander. Leave to cool.\r\nIn a large bowl mix together the minced lamb, white pepper, fresh coriander, and the cooled spiced onion mixture until combined. Set aside, covered, in the fridge.\r\nPreheat the oven to 200C/400F/Gas 6 and generously grease a 20cm/8in diameter loose-bottomed or springform round cake tin with lard.\r\nTo make the pastry, sift the flour and salt in a large bowl and make a well in the centre.\r\nPut the milk, lard and 90ml/3fl oz of water in a saucepan and heat gently. When the lard has melted, increase the heat and bring to the boil.\r\nPour the boiling liquid into the flour, and use a wooden spoon to combine until cool enough to handle. Bring together into a ball.\r\nDust a work surface with flour and, working quickly, knead the dough briefly – it will be soft and moist. Set aside a third of the pastry and roll the rest out on a well-floured surface. Line the pie dish with the pastry, pressing it right up the sides until it pokes just over the top of the tin.\r\nAdd the filling into the pastry-lined tin bit by bit. As you reach the top, form a slight peak. Roll out the reserved pastry and top the pie with it. Pinch the edges to seal and trim the excess. Poke a hole in the top of the pie and insert a small tube made from aluminium foil to allow steam to escape.\r\nBrush the top of the pie with a little beaten egg yolk, and bake in the preheated oven for 30 minutes (put a tray on the shelf below to catch any drips). Then reduce the temperature to 160C/325F/Gas 3 and cook for a further 1¼ hours until golden-brown. Leave to cool completely before refrigerating for two hours, or overnight.\r\nRun a knife around the edge of the pie, remove from the tin and serve with chutneys, salads or pickles.",
  strMealThumb:
    "https://www.themealdb.com/images/media/meals/vssrtx1511557680.jpg",
  strTags: "Pie",
  strYoutube: "https://www.youtube.com/watch?v=1nArqhRyszw",
  strIngredient1: "Cumin",
  strIngredient2: "Rapeseed Oil",
  strIngredient3: "Red Onions",
  strIngredient4: "Garlic Clove",
  strIngredient5: "Green Chilli",
  strIngredient6: "Red Pepper",
  strIngredient7: "Nutmeg",
  strIngredient8: "Coriander",
  strIngredient9: "Lamb Mince",
  strIngredient10: "Pepper",
  strIngredient11: "Coriander",
  strIngredient12: "Plain Flour",
  strIngredient13: "Salt",
  strIngredient14: "Milk",
  strIngredient15: "Lard",
  strIngredient16: "Egg Yolks",
  strIngredient17: "",
  strIngredient18: "",
  strIngredient19: "",
  strIngredient20: "",
  strMeasure1: "2 tsp",
  strMeasure2: "1 tbs",
  strMeasure3: "2 finely chopped",
  strMeasure4: "6",
  strMeasure5: "3 finely chopped",
  strMeasure6: "1 finely chopped ",
  strMeasure7: "1 tsp ",
  strMeasure8: "2 tsp",
  strMeasure9: "1kg",
  strMeasure10: "1 tsp ",
  strMeasure11: "3 tbs",
  strMeasure12: "340g",
  strMeasure13: "½ tsp",
  strMeasure14: "90 ml ",
  strMeasure15: "150g",
  strMeasure16: "Beaten",
  strMeasure17: "",
  strMeasure18: "",
  strMeasure19: "",
  strMeasure20: "",
  strSource: "https://www.bbc.co.uk/food/recipes/mcsinghs_scotch_pie_98356",
  strImageSource: null,
  strCreativeCommonsConfirmed: null,
  dateModified: null,
});

export const BeefMustardPie = Template.bind({});

BeefMustardPie.args = FullMealMapper.toDto({
  idMeal: "52874",
  strMeal: "Beef and Mustard Pie",
  strDrinkAlternate: null,
  strCategory: "Beef",
  strArea: "British",
  strInstructions:
    "Preheat the oven to 150C/300F/Gas 2.\r\nToss the beef and flour together in a bowl with some salt and black pepper.\r\nHeat a large casserole until hot, add half of the rapeseed oil and enough of the beef to just cover the bottom of the casserole.\r\nFry until browned on each side, then remove and set aside. Repeat with the remaining oil and beef.\r\nReturn the beef to the pan, add the wine and cook until the volume of liquid has reduced by half, then add the stock, onion, carrots, thyme and mustard, and season well with salt and pepper.\r\nCover with a lid and place in the oven for two hours.\r\nRemove from the oven, check the seasoning and set aside to cool. Remove the thyme.\r\nWhen the beef is cool and you're ready to assemble the pie, preheat the oven to 200C/400F/Gas 6.\r\nTransfer the beef to a pie dish, brush the rim with the beaten egg yolks and lay the pastry over the top. Brush the top of the pastry with more beaten egg.\r\nTrim the pastry so there is just enough excess to crimp the edges, then place in the oven and bake for 30 minutes, or until the pastry is golden-brown and cooked through.\r\nFor the green beans, bring a saucepan of salted water to the boil, add the beans and cook for 4-5 minutes, or until just tender.\r\nDrain and toss with the butter, then season with black pepper.\r\nTo serve, place a large spoonful of pie onto each plate with some green beans alongside.",
  strMealThumb:
    "https://www.themealdb.com/images/media/meals/sytuqu1511553755.jpg",
  strTags: "Meat,Pie",
  strYoutube: "https://www.youtube.com/watch?v=nMyBC9staMU",
  strIngredient1: "Beef",
  strIngredient2: "Plain Flour",
  strIngredient3: "Rapeseed Oil",
  strIngredient4: "Red Wine",
  strIngredient5: "Beef Stock",
  strIngredient6: "Onion",
  strIngredient7: "Carrots",
  strIngredient8: "Thyme",
  strIngredient9: "Mustard",
  strIngredient10: "Egg Yolks",
  strIngredient11: "Puff Pastry",
  strIngredient12: "Green Beans",
  strIngredient13: "Butter",
  strIngredient14: "Salt",
  strIngredient15: "Pepper",
  strIngredient16: "",
  strIngredient17: "",
  strIngredient18: "",
  strIngredient19: "",
  strIngredient20: "",
  strMeasure1: "1kg",
  strMeasure2: "2 tbs",
  strMeasure3: "2 tbs",
  strMeasure4: "200ml",
  strMeasure5: "400ml",
  strMeasure6: "1 finely sliced",
  strMeasure7: "2 chopped",
  strMeasure8: "3 sprigs",
  strMeasure9: "2 tbs",
  strMeasure10: "2 free-range",
  strMeasure11: "400g",
  strMeasure12: "300g",
  strMeasure13: "25g",
  strMeasure14: "pinch",
  strMeasure15: "pinch",
  strMeasure16: "",
  strMeasure17: "",
  strMeasure18: "",
  strMeasure19: "",
  strMeasure20: "",
  strSource: "https://www.bbc.co.uk/food/recipes/beef_and_mustard_pie_58002",
  strImageSource: null,
  strCreativeCommonsConfirmed: null,
  dateModified: null,
});

export const GinFizz = Template.bind({});

GinFizz.args = FullDrinkMapper.toDto({
  idDrink: "11410",
  strDrink: "Gin Fizz",
  strDrinkAlternate: null,
  strTags: "IBA,Classic",
  strVideo: "https://www.youtube.com/watch?v=obGhGNUKx30",
  strCategory: "Ordinary Drink",
  strIBA: "Unforgettables",
  strAlcoholic: "Alcoholic",
  strGlass: "Highball glass",
  strInstructions:
    "Shake all ingredients with ice cubes, except soda water. Pour into glass. Top with soda water.",
  strInstructionsES: null,
  strInstructionsDE:
    "Alle Zutaten mit Eiswürfel schütteln, außer Sodawasser. In das Glas gießen. Mit Sodawasser auffüllen.",
  strInstructionsFR: null,
  strInstructionsIT:
    "Shakerare tutti gli ingredienti con cubetti di ghiaccio, tranne l'acqua gassata. Versare nel bicchiere. Completare con acqua gassata.",
  "strInstructionsZH-HANS": null,
  "strInstructionsZH-HANT": null,
  strDrinkThumb:
    "https://www.thecocktaildb.com/images/media/drink/drtihp1606768397.jpg",
  strIngredient1: "Gin",
  strIngredient2: "Lemon",
  strIngredient3: "Powdered sugar",
  strIngredient4: "Carbonated water",
  strIngredient5: null,
  strIngredient6: null,
  strIngredient7: null,
  strIngredient8: null,
  strIngredient9: null,
  strIngredient10: null,
  strIngredient11: null,
  strIngredient12: null,
  strIngredient13: null,
  strIngredient14: null,
  strIngredient15: null,
  strMeasure1: "2 oz ",
  strMeasure2: "Juice of 1/2 ",
  strMeasure3: "1 tsp ",
  strMeasure4: null,
  strMeasure5: null,
  strMeasure6: null,
  strMeasure7: null,
  strMeasure8: null,
  strMeasure9: null,
  strMeasure10: null,
  strMeasure11: null,
  strMeasure12: null,
  strMeasure13: null,
  strMeasure14: null,
  strMeasure15: null,
  strImageSource:
    "https://commons.wikimedia.org/wiki/File:15-09-26-RalfR-WLC-0032.jpg",
  strImageAttribution: null,
  strCreativeCommonsConfirmed: "Yes",
  dateModified: "2017-09-02 12:29:32",
});
