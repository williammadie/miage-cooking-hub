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
      <div style={{ paddingTop: "20px" }}>
        <SwitchSetting {...args} />
      </div>
    </BrowserRouter>
  </DarkModeProvider>
);

export const Default = Template.bind({});

Default.args = {
  switchStatus: (isChecked) => console.log("Switch status:", isChecked),
};
