import type { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox, type CheckboxProps } from ".";
import { HelperText } from "../HelperText";

const meta: Meta<CheckboxProps> = {
  title: "Checkbox",
  render: (args) => {
    const { disabled } = args;
    return (<Checkbox.Root disabled={disabled} >
      <Checkbox.Button {...args} id="terms" />
      <Checkbox.Label htmlFor="terms" >Aceitar termos e condições da promoção</Checkbox.Label>
      <HelperText.Label className="block pl-4 text-sm text-neutral-500">Você concorda com nossos Termos de Serviço e Política de Privacidade.</HelperText.Label>
    </Checkbox.Root>
    )
  },
  args: {
    disabled: false,
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: "Checkboxes permitem selecionar um ou mais itens. Também pode ser usado para marcar uma opção. "
    }
  },
};

export default meta;

type Story = StoryObj<CheckboxProps>;

export const Default: Story = {
  parameters: {
    docs: {
      description: 'É o estado padrão de aplicação.'
    }
  },
};

export const WithLabel: Story = {
  name: 'Checkbox com label',
  parameters: {
    docs: {
      description: 'Checkbox com label'
    }
  },
  render: (props) => (
    <Checkbox.Root >
      <Checkbox.Button {...props} id="terms1" />
      <Checkbox.Label htmlFor="terms1">Aceitar termos e condições da promoção</Checkbox.Label>
    </Checkbox.Root>
  )
  ,
};

export const WithHelperText: Story = {
  name: 'Checkbox com texto auxiliar',
  parameters: {
    docs: {
      description: 'Aplicado para adicionar algum um texto de apoio à opção.'
    }
  },
  render: (props) =>
  (
    <Checkbox.Root >
      <Checkbox.Button {...props} id="terms2" />
      <Checkbox.Label htmlFor="terms2">Aceitar termos e condições da promoção</Checkbox.Label>
      <HelperText.Label className="block pl-4 text-sm text-neutral-500">Você concorda com nossos Termos de Serviço e Política de Privacidade.</HelperText.Label>
    </Checkbox.Root>
  )
}

