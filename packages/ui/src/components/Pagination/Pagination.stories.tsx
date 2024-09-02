import { StoryObj } from "@storybook/react";
import { Pagination } from "./";

type PaginationProps = {
  disabled: boolean;
  current: number;
  total: number;
  isActive: boolean;
  onChange: React.FormEventHandler<HTMLFormElement>;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
};

export default {
  title: "Pagination",
  parameters: {
    docs: {
      description: {
        component:
          "Paginação com navegação de página, links seguintes e anteriores.",
      },
    },
  },
};

type Story = StoryObj<PaginationProps>;

export const PaginationStory: Story = {
  name: "Pagination",
  args: { disabled: false, current: 1, total: 10 },
  argTypes: {
    disabled: {
      description: "Desabilita botões de paginação.",
      control: { type: "boolean" },
    },
    current: {
      description: "Página atual.",
      control: { type: "number" },
    },
    total: {
      description: "Total de páginas",
      control: { type: "number" },
    },
  },
  render: ({ disabled, current, total }) => {
    return (
      <Pagination.Root className="flex items-center gap-4">
        <Pagination.Label current={current} total={total} />
        <Pagination.Content>
          <Pagination.Item>
            <Pagination.FirstPage disabled={disabled} />
          </Pagination.Item>
          <Pagination.Item>
            <Pagination.Previous onClick={() => console.log("previous")} />
          </Pagination.Item>
          <Pagination.Item>
            <Pagination.Next onClick={() => console.log("next")} />
          </Pagination.Item>
          <Pagination.Item>
            <Pagination.LastPage onClick={() => console.log("last")} />
          </Pagination.Item>
        </Pagination.Content>
      </Pagination.Root>
    );
  },
};

export const PaginationLabelStory: Story = {
  name: "Pagination Label",
  args: {
    current: 1,
    total: 10,
  },
  argTypes: {
    current: {
      description: "Página atual.",
      control: { type: "number" },
    },
    total: {
      description: "Total de páginas",
      control: { type: "number" },
    },
  },
  render: ({ current, total }) => {
    return (
      <Pagination.Root>
        <Pagination.Label current={current} total={total} />
      </Pagination.Root>
    );
  },
};

export const PaginationButtonsStory: Story = {
  name: "Pagination Buttons",
  args: {
    isActive: true,
  },
  argTypes: {
    isActive: {
      description: "Se é a página atual.",
      control: { type: "boolean" },
    },
  },
  render: ({ isActive }) => {
    return (
      <Pagination.Root>
        <Pagination.Content>
          <Pagination.Item>
            <Pagination.Previous />
          </Pagination.Item>
          <Pagination.Item>
            <Pagination.Button isActive={isActive}>1</Pagination.Button>
          </Pagination.Item>
          <Pagination.Item>
            <Pagination.Button>2</Pagination.Button>
          </Pagination.Item>
          <Pagination.Item>
            <Pagination.Button>3</Pagination.Button>
          </Pagination.Item>
          <Pagination.Item>
            <Pagination.Ellipsis />
          </Pagination.Item>
          <Pagination.Item>
            <Pagination.Next />
          </Pagination.Item>
        </Pagination.Content>
      </Pagination.Root>
    );
  },
};

export const PaginationFormStory: Story = {
  name: "Pagination Form",
  args: {
    current: 1,
    total: 250,
    onChange: (event: React.FormEvent<HTMLFormElement>) => console.log(event),
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      console.log(event);
    },
  },
  argTypes: {
    current: {
      description: "Página atual.",
      control: { type: "number" },
    },
    total: {
      description: "Total de páginas",
      control: { type: "number" },
    },
    onChange: {
      description: "Função de callback para mudança de página.",
      action: "onChange",
    },
    onSubmit: {
      description: "Função de callback para submissão de página.",
      action: "onSubmit",
    },
  },
  render: ({ current, total, onChange, onSubmit }) => (
    <Pagination.Form
      current={current}
      total={total}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  ),
};
