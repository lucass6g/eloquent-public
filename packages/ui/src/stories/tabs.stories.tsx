import { Meta, StoryObj } from "@storybook/react";
import { Button,Input, Label, Tabs} from "../";

const meta = {
  title: "Tabs",
  component: () => (
    <div className="flex w-[400px]">
      <Tabs.Root defaultValue="login" className="w-full">
        <Tabs.List className="flex  justify-start gap-4 items-start bg-gray-200 pb-6">
          <Tabs.Trigger value="login">Entrar</Tabs.Trigger>
          <Tabs.Trigger value="signup">Cadastrar</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="login">
          <div className="grid gap-3 border px-4 py-6 rounded-lg">
            <p className="text-balance text-muted-foreground text-[#64748B]">
              Insira suas credenciais para acessar o nosso super site mais
              brasileiro do Brasil todo.
            </p>
            <div className="grid gap-4">
              <Label
                htmlFor="email"
                className="font-bold text-primary-foreground"
              >
                CPF
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Digite seu CPF"
                required
              />
            </div>

            <div className="mb-12 grid gap-4">
              <div>
                <Label
                  htmlFor="password"
                  className="font-bold"
                >
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
            <div className="flex gap-8">
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
            <p className="text-balance text-muted-foreground text-[#64748B]">
              Aproveite o melhor do cartão do brasileiro agora!
            </p>
            <div className="grid gap-4">
              <Label
                htmlFor="name"
                className="font-bold"
              >
                Nome
              </Label>
              <Input
                id="name"
                type="name"
                placeholder="Digite seu nome completo"
                required
              />
            </div>
            <div className="grid gap-4">
              <Label
                htmlFor="birthdate"
                className="font-bold"
              >
                Data de nascimento
              </Label>
              <Input
                id="birthdate"
                type="birthdate"
                placeholder="Digite a data de nascimento"
                required
              />
            </div>
            <div className="grid gap-4">
              <Label
                htmlFor="email"
                className="font-bold"
              >
                CPF
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Digite seu CPF"
                required
              />
            </div>
            <div className="grid gap-4">
              <Label
                htmlFor="password"
                className="font-bold"
              >
                Senha
              </Label>
              <Input
                id="password"
                type="password"
                required
                placeholder="Digite sua senha"
              />
            </div>
            <div className="mb-12 grid gap-4">
              <Label
                htmlFor="password"
                className="font-bold"
              >
                Confirmar Senha
              </Label>
              <Input
                id="password"
                type="password"
                required
                placeholder="Digite sua senha"
              />
            </div>
            <div className="flex gap-8">
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
