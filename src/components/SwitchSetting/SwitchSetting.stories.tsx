import React from "react";

import { BrowserRouter } from "react-router-dom";
import { StoryFn } from "@storybook/react";
import { FormControlLabel } from "@mui/material";
import SwitchSetting, { SwitchSettingProps } from "./SwitchSetting";

export default {
  component: SwitchSetting,
  title: "component/SearchBar",
};

const Template: StoryFn<SwitchSettingProps> = (args: SwitchSettingProps) => (
  <BrowserRouter>
    <SwitchSetting {...args} />
  </BrowserRouter>
);

export const Default = Template.bind({});

Default.args = {
  // receiveMeals: () => {
  //   console.log("hello world!");
  // },
};
