import { LayoutGrid } from "lucide-react";
import { DropdownMenu } from "./";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<{}> = {
  title: "Dropdown Menu",
  render: () => (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>Components</DropdownMenu.Trigger>
      <DropdownMenu.Content align={"start"} className="w-56">
        <DropdownMenu.Label>Título</DropdownMenu.Label>
        <DropdownMenu.Separator />
        <DropdownMenu.Group>
          <DropdownMenu.Item>
            <DropdownMenu.Icon>
              <LayoutGrid size={18} color="currentColor" strokeWidth={1.5} />
            </DropdownMenu.Icon>
            Item 1
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <DropdownMenu.Icon>
              <LayoutGrid size={18} color="currentColor" strokeWidth={1.5} />
            </DropdownMenu.Icon>
            Item 2
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <DropdownMenu.Icon>
              <LayoutGrid size={18} color="currentColor" strokeWidth={1.5} />
            </DropdownMenu.Icon>
            Item 3
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <DropdownMenu.Icon>
              <LayoutGrid size={18} color="currentColor" strokeWidth={1.5} />
            </DropdownMenu.Icon>
            Item 4
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <DropdownMenu.Icon>
              <LayoutGrid size={18} color="currentColor" strokeWidth={1.5} />
            </DropdownMenu.Icon>
            Item 5
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <DropdownMenu.Icon>
              <LayoutGrid size={18} color="currentColor" strokeWidth={1.5} />
            </DropdownMenu.Icon>
            Item 6
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <DropdownMenu.Icon>
              <LayoutGrid size={18} color="currentColor" strokeWidth={1.5} />
            </DropdownMenu.Icon>
            Item 7
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <DropdownMenu.Icon>
              <LayoutGrid size={18} color="currentColor" strokeWidth={1.5} />
            </DropdownMenu.Icon>
            Item 8
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <DropdownMenu.Icon>
              <LayoutGrid size={18} color="currentColor" strokeWidth={1.5} />
            </DropdownMenu.Icon>
            Item 9
          </DropdownMenu.Item>
        </DropdownMenu.Group>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  ),
};

export default meta;

export const Default: StoryObj<{}> = {};
