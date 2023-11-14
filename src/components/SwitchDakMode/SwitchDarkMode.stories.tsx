import React from "react";
import { StoryFn } from "@storybook/react";
import SwitchDarkMode from "./SwitchDarkMode";
import { DarkModeProvider } from "../../context/DarkModeContext";

export default {
  component: SwitchDarkMode,
  title: "component/SwitchDarkMode",
};

const Template: StoryFn = (args) => (
  <DarkModeProvider>
    <SwitchDarkMode {...args} />
  </DarkModeProvider>
);

export const Default = Template.bind({});
