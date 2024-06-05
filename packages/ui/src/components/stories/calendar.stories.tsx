import { Meta, StoryObj } from "@storybook/react";
import { Calendar as CalendarComponent } from "../calendar";

//meta
const meta = {
  title: "components/Date",
  component: CalendarComponent,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof CalendarComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Calendar: Story = {
  args: {},
};
