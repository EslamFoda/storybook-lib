import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Button, { ButtonProps } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  style: { backgroundColor: "#007bff" },
};

export const Secondary = Template.bind({});
Secondary.args = {
  style: { backgroundColor: "#6c757d" },
};
