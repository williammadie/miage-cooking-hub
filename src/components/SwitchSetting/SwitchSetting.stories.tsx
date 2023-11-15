import React from "react";

import { BrowserRouter } from "react-router-dom";
import { StoryFn } from "@storybook/react";
import SwitchSetting, { SwitchSettingProps } from "./SwitchSetting";
import { DarkModeProvider } from "../../context/DarkModeContext";

export default {
  component: SwitchSetting,
  title: "component/SwitchSetting",
};

const Template: StoryFn<SwitchSettingProps> = (args: SwitchSettingProps) => (
  <DarkModeProvider>
    <BrowserRouter>
      <SwitchSetting {...args} />
    </BrowserRouter>
  </DarkModeProvider>
  
);

export const Default = Template.bind({});

Default.args = {};
