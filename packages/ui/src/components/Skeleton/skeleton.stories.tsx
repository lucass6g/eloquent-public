import { Meta, StoryObj } from '@storybook/react'
import { Skeleton } from '.';

const meta = {
    title: "Skeleton",
    component: Skeleton,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<{}>

export default meta;

type Story = StoryObj<typeof meta>

export const SkeletonAvatar: Story = {
    args: {},
    render: () => (
        <Skeleton className="h-12 w-12 rounded-full" />
    ),
    parameters: {
        layout: 'centered',
        doc: {
            description: {
                story: "Aplicado enquanto o componente Avatar é carregado."
            },
        }
    },
}

export const SkeletonText: Story = {
    args: {},
    render: () => (
        <Skeleton className="h-4 w-[392px]" />
    ),
    parameters: {
        doc: {
            description: {
                story: "Aplicado enquanto uma linha de texto está sendo carregada. Pode ser utilizado em conjunto quando existir mais de uma linha no texto."
            },
        }
    },
}

export const SkeletonCard: Story = {
    args: {},
    render: () => (
        <Skeleton className="h-32 w-[392px] rounded-xl" />
    ),
    parameters: {
        doc: {
            description: {
                story: "Aplicado enquanto o componente Card é carregado."
            },
        }
    },
}