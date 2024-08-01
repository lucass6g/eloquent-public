import { Meta, StoryObj } from "@storybook/react";
import { Button, Card, Input, Label, Tabs } from "../";
import { TabsProps, TabsListProps, TabsTriggerProps, TabsContentProps } from "@radix-ui/react-tabs";

type TabsComponentsProps = TabsProps & TabsListProps & TabsTriggerProps & TabsContentProps;

const meta: Meta<TabsComponentsProps> = {
  title: "Tabs",
  component: () => (
    <div className="flex w-[400px]">
      <Tabs.Root>
        <Tabs.List>
          <Tabs.Trigger value="account">Conta</Tabs.Trigger>
          <Tabs.Trigger value="password">Senha</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="account">Conta</Tabs.Content>
        <Tabs.Content value="password">Senha</Tabs.Content>
      </Tabs.Root>
    </div>
  ),
  parameters: {
    layout: "centered",
  },
  tags: ["!autodocs"]
};

export default meta;

type Story = StoryObj<typeof meta>;

export const TabsDemo: Story = {
  args: {
    disabled: false,
    defaultValue: "account",
    loop: true,
  },
  argTypes: {
    disabled: {
      description: "Quando verdadeiro, impede que o usuário interaja com a guia.",
      control: { type: "boolean" },
      table: {
        defaultValue: { summary: "false" }
      }
    },
    defaultValue: {
      description: "O valor da guia que deve estar ativa quando renderizada inicialmente. Use quando não precisar controlar o estado das guias.",
      control: { type: "text" },
      table: {
        defaultValue: { summary: "account" }
      }
    },
    loop: {
      description: "Quando verdadeiro, a navegação pelo teclado irá percorrer da última guia para a primeira e vice-versa.",
      control: { type: "boolean" },
      table: {
        defaultValue: { summary: "true" }
      }
    },
    onValueChange: {
      action: "onValueChange",
      table: {
        disable: true
      }
    }
  },
  render: ({ disabled, defaultValue, loop, onValueChange }) => (
    <div className="flex w-[400px]">
      <Tabs.Root onValueChange={onValueChange} dir="ltr" defaultValue={defaultValue} className="w-[400px]">
        <Tabs.List loop={loop} className="grid w-full grid-cols-2">
          <Tabs.Trigger disabled={disabled} value="account">Conta</Tabs.Trigger>
          <Tabs.Trigger disabled={disabled} value="password">Senha</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="account">
          <Card.Root>
            <Card.Header>
              <Card.Title className="text-2xl">Conta</Card.Title>
              <Card.Description>
                Faça alterações em sua conta aqui. Clique em salvar quando
                terminar.
              </Card.Description>
            </Card.Header>
            <Card.Content className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Nome</Label>
                <Input.Root id="name" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="username">Nome de usuário</Label>
                <Input.Root id="username" />
              </div>
            </Card.Content>
            <Card.Footer>
              <Button>Salvar alterações</Button>
            </Card.Footer>
          </Card.Root>
        </Tabs.Content>
        <Tabs.Content value="password">
          <Card.Root>
            <Card.Header>
              <Card.Title className="text-2xl">Password</Card.Title>
              <Card.Description>
                Altere sua senha aqui. Após salvar, você será deslogado
              </Card.Description>
            </Card.Header>
            <Card.Content className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="current">Senha atual</Label>
                <Input.Root id="current" type="password" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">Nova senha</Label>
                <Input.Root id="new" type="password" />
              </div>
            </Card.Content>
            <Card.Footer>
              <Button>Salvar senha</Button>
            </Card.Footer>
          </Card.Root>
        </Tabs.Content>
      </Tabs.Root>
    </div>
  )
};
