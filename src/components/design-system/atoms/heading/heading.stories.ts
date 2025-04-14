import type { Meta, StoryObj } from "@storybook/react";
import { Heading } from "./heading";

const meta = {
  title: "Design System/Atoms/Heading",
  component: Heading,
  argTypes: {
    level: {
      control: "select",
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
    },
    variant: {
      control: "select",
      options: ["default", "accent"],
    },
  },
  args: {
    level: "h1",
    children: "Heading",
    variant: "default",
  },
} satisfies Meta<typeof Heading>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    level: "h1",
    children: "Default Heading",
    variant: "default",
  },
};

export const Accent: Story = {
  args: {
    level: "h1",
    children: "Accent Heading",
    variant: "accent",
  },
};
