import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "./Message";
export default {
  title: "Atoms/Button",
  component: Button,
  parameters: {
    backgrounds: {
      default: "light",
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;
export const Primary = Template.bind({});
Primary.args = {};
