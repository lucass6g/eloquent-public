import { Meta, StoryObj } from "@storybook/react";
import { Button, Input, Label, Tabs } from "../";

const meta = {
  title: "Tabs",
  component: () => (
    <div className="flex w-[400px]">
      <Tabs.Root defaultValue="login" className="w-full">
        <Tabs.List className="flex justify-start gap-4 items-start bg-transparent pb-6">
          <Tabs.Trigger value="login">Entrar</Tabs.Trigger>
          <Tabs.Trigger value="signup">Cadastrar</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="login">
          <div className="p-4 flex flex-col gap-3 border px-4 py-6 rounded-lg">
            <p className="py-2 text-balance">
              Insira suas credenciais para acessar o nosso super site mais
              brasileiro do Brasil todo.
            </p>
            <div className="py-2 grid gap-4">
              <Label htmlFor="email">CPF</Label>
              <Input
                id="email"
                type="email"
                placeholder="Digite seu CPF"
                required
              />
            </div>

            <div className="p-4 flex flex-col gap-4">
              <div>
                <Label htmlFor="password" className="font-bold">
                  Senha
                </Label>
              </div>
              <Input
                id="password"
                type="password"
                required
                placeholder="Digite sua senha"
              />
            </div>
            <div className="p-4 flex gap-8">
              <Button type="submit" className="w-full font-semibold">
                Entrar
              </Button>
              <Button variant="outline" className="w-full font-semibold">
                Esqueci minha senha
              </Button>
            </div>
          </div>
        </Tabs.Content>
        <Tabs.Content value="signup">
          <div className="grid gap-3 border px-4 py-6 rounded-lg">
            <p className="mt-4 text-balance">
              Aproveite o melhor do cartão do brasileiro agora!
            </p>
            <div className="p-2 flex flex-col gap-4">
              <Label htmlFor="name" className="font-bold">
                Nome
              </Label>
              <Input
                id="name"
                type="name"
                placeholder="Digite seu nome completo"
                required
              />
            </div>
            <div className="p-2 flex flex-col gap-4">
              <Label htmlFor="birthdate" className="font-bold">
                Data de nascimento
              </Label>
              <Input
                id="birthdate"
                type="birthdate"
                placeholder="Digite a data de nascimento"
                required
              />
            </div>
            <div className="p-2 flex flex-col gap-4">
              <Label htmlFor="email" className="font-bold">
                CPF
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Digite seu CPF"
                required
              />
            </div>
            <div className="p-2 flex flex-col gap-4">
              <Label htmlFor="password" className="font-bold">
                Senha
              </Label>
              <Input
                id="password"
                type="password"
                required
                placeholder="Digite sua senha"
              />
            </div>
            <div className="p-2 flex flex-col gap-4 mb-6">
              <Label htmlFor="password" className="font-bold">
                Confirmar Senha
              </Label>
              <Input
                id="password"
                type="password"
                required
                placeholder="Digite sua senha"
              />
            </div>
            <div className="py-4 flex ">
              <Button type="submit" className="w-full font-semibold">
                Entrar
              </Button>
            </div>
          </div>
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
  args: {},
};
