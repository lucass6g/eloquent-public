import { StoryObj } from "@storybook/react";
import { Table } from "./";

const meta = {
  title: "Table",
  component: Table,
  parameters: {
    docs: {
      description: {
        component: "Um componente de tabela responsivo.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

const header = Array(6).fill("Header");
const body = Array(6).fill({
  cell1: "Data Label",
  cell2: "Data Label",
  cell3: "Data Label",
  cell4: "Data Label",
  cell5: "Data Label",
  cell6: "Data Label",
});

export const TableStory: Story = {
  name: "Table",
  render: () => (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          {header.map((item, index) => (
            <Table.Head key={index}>{item}</Table.Head>
          ))}
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {body.map((item, index) => (
          <Table.Row key={index}>
            <Table.Cell>{item.cell1}</Table.Cell>
            <Table.Cell>{item.cell2}</Table.Cell>
            <Table.Cell>{item.cell3}</Table.Cell>
            <Table.Cell>{item.cell4}</Table.Cell>
            <Table.Cell>{item.cell5}</Table.Cell>
            <Table.Cell>{item.cell6}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  ),
};
