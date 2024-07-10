import { ExampleTable } from "@/components/composite/example.table";
import { IndexTable } from "@/components/shared";
import type { Meta, StoryObj } from "@storybook/react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof IndexTable> = {
  title: "shared/IndexTable",
  component: ExampleTable,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    backgrounds: {
      // default: 'dark',
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: [""],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Example: Story = {
  args: {},
};
