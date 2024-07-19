import { Meta, StoryObj } from '@storybook/react/*';
import { VariantProps } from 'class-variance-authority'
import { Drawer } from '.';
import { Button } from '../Button';
import { drawerVariants } from './variants';

type TypeCustomDrawerProps = {} & VariantProps<typeof drawerVariants>

const meta = {
    title: 'Drawer',
    args: {
        variant: 'default',
    },
    render: () => (
        <Drawer.Root>
            <Drawer.Trigger>Abrir</Drawer.Trigger>
            <Drawer.Portal>
                <Drawer.Content>
                    <Drawer.Header>
                        <Drawer.Title>Content title</Drawer.Title>
                    </Drawer.Header>
                    <Drawer.Description>Content description</Drawer.Description>
                    <Drawer.Footer>
                        <Drawer.Close asChild>
                            <Button variant="default">Cancel</Button>
                        </Drawer.Close>
                    </Drawer.Footer>
                </Drawer.Content>
                <Drawer.Overlay />
            </Drawer.Portal>
        </Drawer.Root>
    ),
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<TypeCustomDrawerProps>

export default meta

type Story = StoryObj<typeof meta>

export const DrawerDefault: Story = {
    name: "Drawer padrão",
    render: () => (
        <Drawer.Root>
            <Drawer.Trigger>Abrir</Drawer.Trigger>
            <Drawer.Portal>
                <Drawer.Content>
                    <Drawer.Header>
                        <Drawer.Title>Content title</Drawer.Title>
                    </Drawer.Header>
                    <Drawer.Description>Content description</Drawer.Description>
                    <Drawer.Footer>
                        <Drawer.Close asChild>
                            <Button variant="default">Cancel</Button>
                        </Drawer.Close>
                    </Drawer.Footer>
                </Drawer.Content>
                <Drawer.Overlay />
            </Drawer.Portal>
        </Drawer.Root>
    ),
}
export const DrawerDirectionTop: Story = {
    name: "Drawer com posição no Topo",
    render: () => (
        <Drawer.Root direction='top'>
            <Drawer.Trigger>Abrir</Drawer.Trigger>
            <Drawer.Portal>
                <Drawer.Content>
                    <Drawer.Header>
                        <Drawer.Title>Content title</Drawer.Title>
                    </Drawer.Header>
                    <Drawer.Description>Content description</Drawer.Description>
                    <Drawer.Footer>
                        <Drawer.Close asChild>
                            <Button variant="default">Cancel</Button>
                        </Drawer.Close>
                    </Drawer.Footer>
                </Drawer.Content>
                <Drawer.Overlay />
            </Drawer.Portal>
        </Drawer.Root>
    ),
}

export const DrawerDirectionLeft: Story = {
    name: "Drawer animação para Esquerda",
    render: () => (
        <Drawer.Root direction='left'>
            <Drawer.Trigger>Abrir</Drawer.Trigger>
            <Drawer.Portal>
                <Drawer.Content>
                    <Drawer.Header>
                        <Drawer.Title>Content title</Drawer.Title>
                    </Drawer.Header>
                    <Drawer.Description>Content description</Drawer.Description>
                    <Drawer.Footer>
                        <Drawer.Close asChild>
                            <Button variant="default">Cancel</Button>
                        </Drawer.Close>
                    </Drawer.Footer>
                </Drawer.Content>
                <Drawer.Overlay />
            </Drawer.Portal>
        </Drawer.Root>
    ),
}


export const DrawerDirectionRight: Story = {
    name: "Drawer animação para Direita",
    render: () => (
        <Drawer.Root direction='right'>
            <Drawer.Trigger>Abrir</Drawer.Trigger>
            <Drawer.Portal>
                <Drawer.Content>
                    <Drawer.Header>
                        <Drawer.Title>Content title</Drawer.Title>
                    </Drawer.Header>
                    <Drawer.Description>Content description</Drawer.Description>
                    <Drawer.Footer>
                        <Drawer.Close asChild>
                            <Button variant="default">Cancel</Button>
                        </Drawer.Close>
                    </Drawer.Footer>
                </Drawer.Content>
                <Drawer.Overlay />
            </Drawer.Portal>
        </Drawer.Root>
    ),
}


export const DrawerResponsive: Story = {
    name: "Drawer responsivo",
    args: {
        variant: 'responsive',
    },
    render: () => (
        <Drawer.Root>
            <Drawer.Trigger>Abrir</Drawer.Trigger>
            <Drawer.Portal>
                <Drawer.Content variant="responsive">
                    <Drawer.Header>
                        <Drawer.Title>Content title</Drawer.Title>
                    </Drawer.Header>
                    <Drawer.Description>Content description</Drawer.Description>
                    <Drawer.Footer>
                        <Drawer.Close asChild>
                            <Button variant="default">Cancel</Button>
                        </Drawer.Close>
                    </Drawer.Footer>
                </Drawer.Content>
                <Drawer.Overlay />
            </Drawer.Portal>
        </Drawer.Root>
    ),
}


