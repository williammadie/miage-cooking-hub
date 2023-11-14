import React from "react";

import { BrowserRouter } from "react-router-dom";
import { StoryFn } from "@storybook/react";
import { DarkModeProvider } from "../../context/DarkModeContext";
import Nutriscore, { NutriscoreProps } from "./Nutriscore";

export default {
  component: Nutriscore,
  title: "component/Nutriscore",
};

const Template: StoryFn<NutriscoreProps> = (
  args: NutriscoreProps
) => (
  <DarkModeProvider>
    <BrowserRouter>
      <Nutriscore {...args} />
    </BrowserRouter>
  </DarkModeProvider>
);

export const A = Template.bind({});

A.args = {
    scoreValue: "a",
};

export const B = Template.bind({});

B.args = {
    scoreValue: "b",
};

export const C = Template.bind({});

C.args = {
    scoreValue: "c",
};

export const D = Template.bind({});

D.args = {
    scoreValue: "d",
};

export const E = Template.bind({});

E.args = {
    scoreValue: "e",
};