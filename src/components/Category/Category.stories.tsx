import React from 'react';
import Category, {CategoryProps} from './Category';
import {StoryFn} from "@storybook/react";
import {BrowserRouter} from "react-router-dom";



export default {
    component: Category,
    title: 'Component/Category'
};

const Template: StoryFn<CategoryProps> = (
    args: CategoryProps
) => (
    <BrowserRouter>
        <Category {...args} />
    </BrowserRouter>
    //j'ai essayé de faire comme toi, mais j'ai des erreurs
    // Si t'essayes d'utiliser un type ici StoryFn<monType> ça change qq chose ?
)

export const Default = Template.bind({});

Default.args = {
    category: "Beef"
};

export const Breakfast = Template.bind({});

Breakfast.args = {
    category: "Breakfast"
}
export const Chicken = Template.bind({});
Chicken.args = {
    category: "Chicken"
};

export const Dessert = Template.bind({});
Dessert.args = {
    category: "Dessert"
};

export const Goat = Template.bind({});
Goat.args = {
    category: "Goat"
};

export const Lamb = Template.bind({});
Lamb.args = {
    category: "Lamb"
};

export const Miscellaneous = Template.bind({});
Miscellaneous.args = {
    category: "Miscellaneous"
};

export const Pasta = Template.bind({});
Pasta.args = {
    category: "Pasta"
};

export const Pork = Template.bind({});
Pork.args = {
    category: "Pork"
};

export const Seafood = Template.bind({});
Seafood.args = {
    category: "Seafood"
};

export const Side = Template.bind({});
Side.args = {
    category: "Side"
};

export const Starter = Template.bind({});
Starter.args = {
    category: "Starter"
};

export const Vegan = Template.bind({});
Vegan.args = {
    category: "Vegan"
};

export const Vegetarian = Template.bind({});
Vegetarian.args = {
    category: "Vegetarian"
};

export const OrdinaryDrink = Template.bind({});
OrdinaryDrink.args = {
    category: "Ordinary Drink"
};

export const Cocktail = Template.bind({});
Cocktail.args = {
    category: "Cocktail"
};

export const Shake = Template.bind({});
Shake.args = {
    category: "Shake"
};

export const OtherUnknown = Template.bind({});
OtherUnknown.args = {
    category: "Other / Unknown"
};

export const Cocoa = Template.bind({});
Cocoa.args = {
    category: "Cocoa"
};

export const Shot = Template.bind({});
Shot.args = {
    category: "Shot"
};

export const CoffeeTea = Template.bind({});
CoffeeTea.args = {
    category: "Coffee / Tea"
};

export const HomemadeLiqueur = Template.bind({});
HomemadeLiqueur.args = {
    category: "Homemade Liqueur"
};

export const PunchPartyDrink = Template.bind({});
PunchPartyDrink.args = {
    category: "Punch / Party Drink"
};

export const Beer = Template.bind({});
Beer.args = {
    category: "Beer"
};

export const SoftDrink = Template.bind({});
SoftDrink.args = {
    category: "Soft Drink"
};