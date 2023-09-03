import React from "react";
import Input from "./Input";

// Define the story using the Meta object
export default {
  title: "Input",
  component: Input,
};

// Create a template for your component
const Template = (args) => <Input {...args} />;

// Define the Primary story
export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  label: "Email / Username",
};
