import React from "react";
import Number from "./Number";

// Define the story using the Meta object
export default {
  title: "Number",
  component: Number,
};

// Create a template for your component
const Template = (args) => <Number {...args} />;

// Define the Default story
export const NumberComponent = Template.bind({});
NumberComponent.args = {
};
