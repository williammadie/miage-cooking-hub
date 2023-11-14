import React from "react";

import { BrowserRouter } from "react-router-dom";
import { StoryFn } from "@storybook/react";
import { DarkModeProvider } from "../../context/DarkModeContext";
import NutritionInfoCard, { NutritionInfoCardProps } from "./NutritionInfoCard";

export default {
  component: NutritionInfoCard,
  title: "component/NutritionInfoCard",
};

const Template: StoryFn<NutritionInfoCardProps> = (
  args: NutritionInfoCardProps
) => (
  <DarkModeProvider>
    <BrowserRouter>
      <NutritionInfoCard {...args} />
    </BrowserRouter>
  </DarkModeProvider>
);

export const Default = Template.bind({});

Default.args = {
    brandName: "Coca-Cola",
    genericName: "Boisson gazeuse sucrée",
    nutriscore: "E",
};