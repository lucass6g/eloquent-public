import { Meta, StoryObj } from '@storybook/react-vite';
import { Command } from '.';
import { ComponentIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

const meta = {
    title: 'Command',
    component: () => (<Command.Root>
        <Command.Input placeholder='Digite um comando...' />
        <Command.List>
            <Command.Empty>Sem resultados.</Command.Empty>
            <Command.Group heading="Título da Seção">
                <Command.Item> <ComponentIcon /> Item 1</Command.Item>
                <Command.Item>Item 2</Command.Item>
                <Command.Item>Item 3</Command.Item>
                <Command.Item>Item 4</Command.Item>
                <Command.Item>Item 5</Command.Item>
            </Command.Group>
        </Command.List>
    </Command.Root>),
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'Um menu visualmente persistente, comum em aplicativos de desktop, que fornece acesso rápido a um conjunto consistente de comandos.'
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

export const CommandDefault: Story = {
    name: 'Command Padrão',
    args: {},
    render: () => (<Command.Root>
        <Command.Input placeholder='Digite um comando...' />
        <Command.List>
            <Command.Empty>Sem resultados.</Command.Empty>
            <Command.Group heading="Título da Seção">
                <Command.Item><ComponentIcon /> Item 1</Command.Item>
                <Command.Item><ComponentIcon /> Item 2</Command.Item>
                <Command.Item><ComponentIcon /> Item 3</Command.Item>
                <Command.Item><ComponentIcon /> Item 4</Command.Item>
                <Command.Item><ComponentIcon /> Item 5</Command.Item>
            </Command.Group>
            <Command.Separator />
            <Command.Group heading="Título da Seção">
                <Command.Item><ComponentIcon /> Item 1</Command.Item>
                <Command.Item><ComponentIcon /> Item 2</Command.Item>
                <Command.Item><ComponentIcon /> Item 3</Command.Item>
                <Command.Item><ComponentIcon /> Item 4</Command.Item>
                <Command.Item><ComponentIcon /> Item 5</Command.Item>
            </Command.Group>
        </Command.List>
    </Command.Root>),
};
export const CommandDialog: Story = {
    name: 'Command com Dialog',
    argTypes: {},
    render: () => {
        const [openDialog, setOpenDialog] = useState(false);

        useEffect(() => {
            const down = (e: KeyboardEvent) => {
                if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
                    e.preventDefault()
                    setOpenDialog((open) => !open)
                }
            }
            document.addEventListener("keydown", down)
            return () => document.removeEventListener("keydown", down)
        }, [])

        return (<>
            <p className="text-sm text-muted-foreground">
                Pressione{" "}
                <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                    <span className="text-xs">⌘</span>J
                </kbd>
            </p>
            <Command.Dialog open={openDialog} onOpenChange={setOpenDialog}  >
                <Command.Input placeholder='Digite um comando...' />
                <Command.List>
                    <Command.Empty>Sem resultados.</Command.Empty>
                    <Command.Group heading="Título da Seção">
                        <Command.Item><ComponentIcon /> Item 1</Command.Item>
                        <Command.Item><ComponentIcon /> Item 2</Command.Item>
                        <Command.Item><ComponentIcon /> Item 3</Command.Item>
                        <Command.Item><ComponentIcon /> Item 4</Command.Item>
                        <Command.Item><ComponentIcon /> Item 5</Command.Item>
                    </Command.Group>
                </Command.List>
            </Command.Dialog>
        </>)
    },
};