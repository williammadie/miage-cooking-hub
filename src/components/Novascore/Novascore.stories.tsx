import React from "react";

import { BrowserRouter } from "react-router-dom";
import { StoryFn } from "@storybook/react";
import { DarkModeProvider } from "../../context/DarkModeContext";
import Novascore, { NovascoreProps } from "./Novascore";

export default {
  component: Novascore,
  title: "component/Novascore",
};

const Template: StoryFn<NovascoreProps> = (
  args: NovascoreProps
) => (
  <DarkModeProvider>
    <BrowserRouter>
      <Novascore {...args} />
    </BrowserRouter>
  </DarkModeProvider>
);

export const N1 = Template.bind({});

N1.args = {
    scoreValue: 1,
};

export const N2 = Template.bind({});

N2.args = {
    scoreValue: 2,
};

export const N3 = Template.bind({});

N3.args = {
    scoreValue: 3,
};

export const N4 = Template.bind({});

N4.args = {
    scoreValue: 4,
};

export const UnknownGrade = Template.bind({});

UnknownGrade.args = {
    scoreValue: 0,
};

export const UndefinedGrade = Template.bind({});

UndefinedGrade.args = {
    scoreValue: undefined,
};