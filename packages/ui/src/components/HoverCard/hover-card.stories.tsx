import { Meta, StoryObj } from '@storybook/react-vite';
import { HoverCard } from '.';
import { Avatar } from '../Avatar';
import { CalendarDays } from 'lucide-react';
import { Button } from '../Button';

const meta = {
    title: 'Hover Card',
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: "Um card informativo que é ativado ao passar o mouse em um link."
            },
            story: {
                inline: false,
                iframeHeight: 400,
            },
        },
       
    },
} satisfies Meta<{}>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HoverDefault: Story = {
    name: 'Hover Card Padrão',
    args: {},
    parameters: {
        docs: {
            description: {
                story: "Exemplo padrão do Hover Card"
            }
        }
    },
    render: () => (
        <HoverCard.Root>
            <HoverCard.Trigger>
                <Button variant="link">@Cartão Elo</Button>
            </HoverCard.Trigger>
            <HoverCard.Content>
                Cartão Elo - O cartão do Brasileiro.
            </HoverCard.Content>
        </HoverCard.Root>
    ),
}

export const HoverCardExample: Story = {
    name: 'Hover Card exemplo',
    args: {},
    parameters: {
        docs: {
            description: {
                story: "Exemplo de uso customizado"
            }
        }
    },
    render: () => (
        <HoverCard.Root>
            <HoverCard.Trigger asChild>
                <Button variant="link">@Cartão Elo</Button>
            </HoverCard.Trigger>
            <HoverCard.Content className="w-80">
                <div className="flex  space-x-4">
                    <Avatar.Root size='sm'>
                        <Avatar.Image src="https://media.elo.com.br/strapi-hml/elo_favicon_8dbd0ab84c.png" />
                        <Avatar.Fallback>VC</Avatar.Fallback>
                    </Avatar.Root>
                    <div className="space-y-1">
                        <h4 className="text-sm font-semibold">Cartão Elo</h4>
                        <p className="text-sm">O cartão do Brasileiro.</p>
                        <div className="flex items-center pt-2">
                            <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                            <span className="text-xs text-muted-foreground">
                                Fundada em 2011
                            </span>
                        </div>
                    </div>
                </div>
            </HoverCard.Content>
        </HoverCard.Root>
    ),
};