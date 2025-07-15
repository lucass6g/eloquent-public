import { Meta, StoryObj } from '@storybook/react-vite';
import { Textarea } from '.';
import { Label } from '../Label';
import { HelperText } from '../HelperText';
import { Button } from '../Button';

const meta = {
    title: 'Textarea',
    component: Textarea,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'Aplicado quando há necessidade de captar muitos dados de texto.'
            },
        },
    },
    args: {
        disabled: false,
    },

} satisfies Meta<{}>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultStory: Story = {
    name: 'Default',
    args: {},
    render: (args) => (<Textarea placeholder='Insira sua mensagem...' {...args} />),
    parameters: {
        docs: {
            description: {
                story: 'Aplicado quando há necessidade de captar muitos dados de texto.'
            }
        }
    }
};

export const WithHelper: Story = {
    name: 'Text Area com texto de ajuda',
    args: {},
    render: (args) => (<div className="w-full gap-1.5">
        <Label htmlFor="message-2" className='text-neutral-800 mb-2'>Título</Label>
        <Textarea placeholder="Digite sua mensagem aqui." id="message-2" />
        <HelperText.Label className="text-neutral-500">
            Seu texto de apoio aparecerá aqui.
        </HelperText.Label>
    </div>),
    parameters: {
        docs: {
            description: {
                story: 'Essa variação adiciona um texto de feedback ou apoio abaixo do campo de entrada.'
            }
        }
    }
};
export const WithTitle: Story = {
    name: 'Text Area com titulo',
    args: {},
    render: (args) => (<div className="w-full gap-1.5">
        <Label htmlFor="message-2" className='text-neutral-800 mb-2'>Título</Label>
        <Textarea placeholder="Digite sua mensagem aqui." id="message-2" />
    </div>),
    parameters: {
        docs: {
            description: {
                story: 'Essa variação adiciona um texto de referência logo acima do campo de entrada.'
            }
        }
    }
};
export const WithButton: Story = {
    name: 'Text Area com botão',
    args: {},
    render: (args) => (<div className="w-[400px] w-full gap-1.5">
        <Label htmlFor="message-2" className='text-neutral-800 mb-2'>Título</Label>
        <Textarea placeholder="Digite sua mensagem aqui." id="message-2" />
        <Button className='mt-2 w-full'>Enviar</Button>
    </div>),
    parameters: {
        docs: {
            description: {
                story: 'Aplicado em cenários com a necessidade de envio dos dados inseridos pelo usuário.'
            }
        }
    }
};
export const WithForm: Story = {
    name: 'Text Area com formulário',
    args: {},
    render: (args) => (<form className="flex flex-col w-full">
        <Label htmlFor="message-2" className='text-neutral-800 mb-2'>Título</Label>
        <Textarea placeholder="Digite sua mensagem aqui." className='w-[300px]' id="message-2" />
        <HelperText.Label>
            Seu texto de apoio aparecerá aqui.
        </HelperText.Label>
        <Button type="submit" className='mt-3'>Enviar</Button>
    </form>),
    parameters: {
        docs: {
            description: {
                story: 'Essa variação adiciona todos itens anteriores. Geralmente aplicada em formulários.'
            }
        }
    }
};
