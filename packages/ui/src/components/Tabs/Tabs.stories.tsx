import { Meta, StoryObj } from "@storybook/react";
import { Button, Card, Input, Label, Tabs } from "../";

const meta = {
  title: "Tabs",
  component: () => (
    <div className="flex w-[400px]">
      <Tabs.Root defaultValue="account" className="w-[400px]">
        <Tabs.List className="grid w-full grid-cols-2">
          <Tabs.Trigger value="account">Conta</Tabs.Trigger>
          <Tabs.Trigger value="password">Senha</Tabs.Trigger>
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
                <Input id="name" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="username">Nome de usuário</Label>
                <Input id="username" />
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
                <Input id="current" type="password" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">Nova senha</Label>
                <Input id="new" type="password" />
              </div>
            </Card.Content>
            <Card.Footer>
              <Button>Salvar senha</Button>
            </Card.Footer>
          </Card.Root>
        </Tabs.Content>
      </Tabs.Root>
    </div>
  ),
  parameters: {
    layout: "centered",
  },
} satisfies Meta<{}>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TabsDemo: Story = {
  render: () => (
    <div className="flex w-[400px]">
      <Tabs.Root defaultValue="account" className="w-[400px]">
        <Tabs.List className="grid w-full grid-cols-2">
          <Tabs.Trigger value="account">Conta</Tabs.Trigger>
          <Tabs.Trigger value="password">Senha</Tabs.Trigger>
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
                <Input id="name" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="username">Nome de usuário</Label>
                <Input id="username" />
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
                <Input id="current" type="password" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">Nova senha</Label>
                <Input id="new" type="password" />
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
