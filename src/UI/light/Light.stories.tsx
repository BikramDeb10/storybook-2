import type { Meta, StoryObj } from "@storybook/react";
import Light from "./Light";

const meta: Meta<typeof Light> = {
  component: Light,
  title: "UI/Light",
  tags: ["autodocs"],
  // When are you need a type
  argTypes: {
    variant: {
      // control: { type: "radio" },
      control: { type: "select" },
      options: ["green", "yellow", "red"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    variant: "red",
  },
};

export const Yellow: Story = {
  args: {
    variant: "yellow",
  },
};

export const Red: Story = {
  args: {
    variant: "red",
  },
};

export const Another: Story = {
  //   args: {
  //     variant: "red",
  //   },

  // render: (args) => <Light {...args} variant="red" />,
  render: (args) => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        border: "2px solid blue",
        width: "max-content",
        borderRadius: "15px",
        gap: "15px",
        padding: "10px",
        background: "grey",
      }}
    >
      <Light variant="red" />
      <Light variant="yellow" />
      <Light variant="green" />
    </div>
  ),
};
