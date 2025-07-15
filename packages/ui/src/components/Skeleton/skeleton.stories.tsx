import { Meta, StoryObj } from '@storybook/react-vite'
import { buttonVariants } from '../Button/variants'
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

export const SkeletonCardNotification: Story = {
    args: {},
    render: () => (
        <>
            <Skeleton className="flex h-64 w-[250px] flex-col gap-2 bg-slate-300 p-5">
                <div className="flex flex-col gap-2">
                    <Skeleton className="h-6 w-20 bg-slate-400" />
                    <Skeleton className="h-4 w-20 bg-slate-400" />
                </div>

                <Skeleton className="rounred h-16 w-full bg-slate-400 " />
                <Skeleton className="h-4 w-full bg-slate-400" />
                <Skeleton className="h-4 w-full bg-slate-400" />
                <Skeleton className="h-4 w-full bg-slate-400" />

                <Skeleton
                    className={
                        buttonVariants({
                            variant: 'default',
                            size: 'default',
                        }) + ' w-full bg-slate-400'
                    }
                />
            </Skeleton>
        </>
    ),
}