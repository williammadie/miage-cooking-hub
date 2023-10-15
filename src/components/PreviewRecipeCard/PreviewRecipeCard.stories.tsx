import React from "react";
import PreviewRecipeCard, { PreviewRecipeCardProps } from "./PreviewRecipeCard";

import recipeSampleImg from "../../assets/sample-recipe.jpg";
import { BrowserRouter } from "react-router-dom";
import { StoryFn } from "@storybook/react";

export default {
  component: PreviewRecipeCard,
  title: "component/PreviewRecipeCard",
};

const Template: StoryFn<PreviewRecipeCardProps> = (args: PreviewRecipeCardProps) => <BrowserRouter><PreviewRecipeCard {...args} /></BrowserRouter>;

export const Default = Template.bind({});

Default.args = {
    title: "European Breakfast",
    img: recipeSampleImg,
};

export const IncorrectImage = Template.bind({});

IncorrectImage.args = {
    title: "Chicken Couscous",
    img: "",
};

export const NoImage = Template.bind({});

NoImage.args = {
    title: "Chicken Couscous",
}

export const VeryLongTitle = Template.bind({});

VeryLongTitle.args = {
    title: "This recipe is unbelievable!!! You won't believe what is inside this recipe! (Second one is incredible)",
    img: recipeSampleImg,
}