import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter } from "react-router-dom";
import {DarkModeProvider} from "../../context/DarkModeContext";

export default {
  component: Navbar,
  title: "component/Navbar",
} as Meta;

const Template: StoryFn = (args) => (
<DarkModeProvider>
  <BrowserRouter>
    <Navbar {...args} />
  </BrowserRouter>
</DarkModeProvider>
);

export const Default = Template.bind({});

Default.args = {};
