import { Meta, StoryObj } from "@storybook/react";
import { Button } from "../button";
import { Input } from "../input";
import { Label } from "../label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../tabs";

const meta = {
  title: "Tabs",
  component: () => (
    <div className="flex w-[400px]">
      <Tabs defaultValue="login" className="w-full">
        <TabsList className="flex w-full justify-start gap-4 bg-gray pb-6">
          <TabsTrigger value="login">Entrar</TabsTrigger>
          <TabsTrigger value="signup">Cadastrar</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <div className="grid gap-3 border px-4 py-6 rounded-lg">
            <p className="text-balance text-muted-foreground text-[#64748B]">
              Insira suas credenciais para acessar o nosso super site mais
              brasileiro do Brasil todo.
            </p>
            <div className="grid gap-4">
              <Label
                htmlFor="email"
                className="font-bold text-[#003933] dark:text-white"
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
                  className="font-bold text-[#003933] dark:text-white"
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
        </TabsContent>
        <TabsContent value="signup">
          <div className="grid gap-3 border px-4 py-6 rounded-lg">
            <p className="text-balance text-muted-foreground text-[#64748B]">
              Aproveite o melhor do cartão do brasileiro agora!
            </p>
            <div className="grid gap-4">
              <Label
                htmlFor="name"
                className="font-bold text-[#003933] dark:text-white"
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
                className="font-bold text-[#003933] dark:text-white"
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
                className="font-bold text-[#003933] dark:text-white"
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
                className="font-bold text-[#003933] dark:text-white"
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
                className="font-bold text-[#003933] dark:text-white"
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
        </TabsContent>
      </Tabs>
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
