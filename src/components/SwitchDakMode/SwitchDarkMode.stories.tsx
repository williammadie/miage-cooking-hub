import React from "react";
import { StoryFn } from "@storybook/react";
import SwitchDarkMode from "./SwitchDarkMode";

export default {
  component: SwitchDarkMode,
  title: "component/SwitchDarkMode",
};

const Template: StoryFn = (args) => <SwitchDarkMode {...args} />;

export const Default = Template.bind({});
