import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter } from "react-router-dom";

export default {
  component: Navbar,
  title: "component/Navbar",
};

const Template = (args) => <BrowserRouter><Navbar {...args} /></BrowserRouter>;

export const Default = Template.bind();

Default.args = {};
