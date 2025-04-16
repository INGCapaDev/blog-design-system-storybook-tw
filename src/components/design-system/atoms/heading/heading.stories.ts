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
    size: {
      control: "select",
      options: ["sm", "base", "lg", "xl", "2xl", "3xl", "4xl"],
    },
    align: {
      control: "select",
      options: ["left", "center", "right"],
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
    align: "left",
    size: "base",
  },
} satisfies Meta<typeof Heading>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Default: Story = {
  args: {
    level: "h1",
    children: "Default Heading",
    variant: "default",
    align: "left",
    size: "base",
  },
  argTypes: {
    variant: {
      table: {
        disable: true,
      },
    },
  },
};

export const Accent: Story = {
  args: {
    level: "h1",
    children: "Accent Heading",
    variant: "accent",
    align: "left",
    size: "base",
  },
  argTypes: {
    variant: {
      table: {
        disable: true,
      },
    },
  },
};
