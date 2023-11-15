import React from "react";
import RandomRecipeCard, { RandomRecipeCardProps } from "./RandomRecipeCard";

import recipeSampleImg from "../../assets/sample-recipe.jpg";
import { BrowserRouter } from "react-router-dom";
import { StoryFn } from "@storybook/react";
import { DarkModeProvider } from "../../context/DarkModeContext";

export default {
  component: RandomRecipeCard,
  title: "component/RandomRecipeCard",
};

const Template: StoryFn<RandomRecipeCardProps> = (
  args: RandomRecipeCardProps
) => (
  <DarkModeProvider>
    <BrowserRouter>
      <RandomRecipeCard {...args} />
    </BrowserRouter>
  </DarkModeProvider>
);

export const Default = Template.bind({});

Default.args = {
  title: "European Breakfast",
  description:
    "In a medium saucepan, stir the clotted cream, butter and cornflour over a low-ish heat and bring to a low simmer. Turn off the heat and keep warm.\r\nMeanwhile, put the cheese and nutmeg in a small bowl and add a good grinding of black pepper, then stir everything together (don’t add any salt at this stage).\r\nPut the pasta in another pan with 2 tsp salt, pour over some boiling water and cook following pack instructions (usually 3-4 mins). When cooked, scoop some of the cooking water into a heatproof jug or mug and drain the pasta, but not too thoroughly.\r\nAdd the pasta to the pan with the clotted cream mixture, then sprinkle over the cheese and gently fold everything together over a low heat using a rubber spatula. When combined, splash in 3 tbsp of the cooking water. At first, the pasta will look wet and sloppy: keep stirring until the water is absorbed and the sauce is glossy. Check the seasoning before transferring to heated bowls. Sprinkle over some chives or parsley, then serve immediately.",
  img: recipeSampleImg,
  category: "dessert",
  ytLink: "https://www.youtube.com/",
};

export const IncorrectImage = Template.bind({});

IncorrectImage.args = {
  title: "Chicken Couscous",
  description:
    "Heat the olive oil in a large frying pan and cook the onion for 1-2 mins just until softened. Add the chicken and fry for 7-10 mins until cooked through and the onions have turned golden. Grate over the ginger, stir through the harissa to coat everything and cook for 1 min more.\r\n\r\nTip in the apricots, chickpeas and couscous, then pour over the stock and stir once. Cover with a lid or tightly cover the pan with foil and leave for about 5 mins until the couscous has soaked up all the stock and is soft. Fluff up the couscous with a fork and scatter over the coriander to serve. Serve with extra harissa, if you like.",
  img: "",
  category: "Chicken",
  ytLink: "https://www.youtube.com/",
};

export const NoImage = Template.bind({});

NoImage.args = {
  title: "Chicken Couscous",
  description:
    "Heat the olive oil in a large frying pan and cook the onion for 1-2 mins just until softened. Add the chicken and fry for 7-10 mins until cooked through and the onions have turned golden. Grate over the ginger, stir through the harissa to coat everything and cook for 1 min more.\r\n\r\nTip in the apricots, chickpeas and couscous, then pour over the stock and stir once. Cover with a lid or tightly cover the pan with foil and leave for about 5 mins until the couscous has soaked up all the stock and is soft. Fluff up the couscous with a fork and scatter over the coriander to serve. Serve with extra harissa, if you like.",
  category: "Chicken",
  ytLink: "https://www.youtube.com/",
};

export const NoLink = Template.bind({});

NoLink.args = {
  title: "Chicken Couscous",
  description:
    "Heat the olive oil in a large frying pan and cook the onion for 1-2 mins just until softened. Add the chicken and fry for 7-10 mins until cooked through and the onions have turned golden. Grate over the ginger, stir through the harissa to coat everything and cook for 1 min more.\r\n\r\nTip in the apricots, chickpeas and couscous, then pour over the stock and stir once. Cover with a lid or tightly cover the pan with foil and leave for about 5 mins until the couscous has soaked up all the stock and is soft. Fluff up the couscous with a fork and scatter over the coriander to serve. Serve with extra harissa, if you like.",
  category: "Chicken",
};

export const EmptyLink = Template.bind({});

EmptyLink.args = {
  title: "Chicken Couscous",
  description:
    "Heat the olive oil in a large frying pan and cook the onion for 1-2 mins just until softened. Add the chicken and fry for 7-10 mins until cooked through and the onions have turned golden. Grate over the ginger, stir through the harissa to coat everything and cook for 1 min more.\r\n\r\nTip in the apricots, chickpeas and couscous, then pour over the stock and stir once. Cover with a lid or tightly cover the pan with foil and leave for about 5 mins until the couscous has soaked up all the stock and is soft. Fluff up the couscous with a fork and scatter over the coriander to serve. Serve with extra harissa, if you like.",
  category: "Chicken",
  ytLink: "",
};
