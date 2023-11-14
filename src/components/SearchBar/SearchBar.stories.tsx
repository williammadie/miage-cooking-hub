import React from "react";

import { BrowserRouter } from "react-router-dom";
import { StoryFn } from "@storybook/react";
import SearchBar, { SearchBarProps } from "./SearchBar";
import { DarkModeProvider } from "../../context/DarkModeContext";

export default {
  component: SearchBar,
  title: "component/SearchBar",
};

const Template: StoryFn<SearchBarProps> = (args: SearchBarProps) => (
  <DarkModeProvider>
    <BrowserRouter>
      <SearchBar {...args} />
    </BrowserRouter>
  </DarkModeProvider>
);

export const Default = Template.bind({});

Default.args = {
  receiveMeals: () => {
    console.log("hello world!");
  },
};
