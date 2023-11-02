import React from "react";
import PreviewRecipeCard, { PreviewRecipeCardProps } from "./PreviewRecipeCard";

import recipeSampleImg from "../../assets/sample-recipe.jpg";
import { BrowserRouter } from "react-router-dom";
import { StoryFn } from "@storybook/react";
import { RecipeType } from "../../constants/RecipeTypes";

export default {
  component: PreviewRecipeCard,
  title: "component/PreviewRecipeCard",
};

const Template: StoryFn<PreviewRecipeCardProps> = (
  args: PreviewRecipeCardProps
) => (
  <BrowserRouter>
    <PreviewRecipeCard {...args} />
  </BrowserRouter>
);

export const Default = Template.bind({});

Default.args = {
  id: "3421",
  title: "European Breakfast",
  img: recipeSampleImg,
  type: RecipeType.Meal,
};

export const IncorrectImage = Template.bind({});

IncorrectImage.args = {
  id: "3421",
  title: "Chicken Couscous",
  img: "",
  type: RecipeType.Meal,
};

export const NoImage = Template.bind({});

NoImage.args = {
  id: "3421",
  title: "Chicken Couscous",
  type: RecipeType.Meal,
};

export const VeryLongTitle = Template.bind({});

VeryLongTitle.args = {
  id: "3421",
  title:
    "This recipe is unbelievable!!! You won't believe what is inside this recipe! (Second one is incredible)",
  img: recipeSampleImg,
  type: RecipeType.Meal,
};
