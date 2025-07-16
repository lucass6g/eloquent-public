import { Meta, StoryObj } from '@storybook/react-vite'
import { AspectRatio } from '.'

const meta = {
  title: 'Aspect Ratio',
  render: () => (
    <AspectRatio ratio={1}>
      <img src="https://via.placeholder.com/300/DEDEDE/DEDEDE" alt="imagem exemplo" />
    </AspectRatio>
  ),
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Exibe uma imagem ou ilustração dentro de uma proporção desejada.'
      },
    },
  },
} satisfies Meta<{}>

export default meta

type Story = StoryObj<typeof meta>

export const OneToOne: Story = {
  args: {},
  name: '1:1',
  parameters: {
    docs: {
      description: {
        story: "Exibe o conteúdo em uma forma quadrada com proporção de 1:1."
      }
    }
  },
  render: () => (
    <div className='w-[300px]'>
      <AspectRatio ratio={1}>
        <img
          src="https://via.placeholder.com/300/DEDEDE/DEDEDE"
          alt="imagem exemplo"
          className="h-full w-full object-cover rounded-[0.375rem]"
        />
      </AspectRatio>
    </div>
  ),
}

export const FourToThree: Story = {
  args: {},
  name: '4:3',
  parameters: {
    docs: {
      description: {
        story: "Exibe o conteúdo em uma forma retangular horizontal com proporção de 4:3."
      }
    }
  },
  render: () => (
    <div className='w-[300px]'>
      <AspectRatio ratio={4 / 3}>
        <img
          src="https://via.placeholder.com/300/DEDEDE/DEDEDE"
          alt="imagem exemplo"
          className="h-full w-full object-cover rounded-[0.375rem]"
        />
      </AspectRatio>
    </div>
  ),
}

export const ThreeToFour: Story = {
  args: {},
  name: '3:4',
  parameters: {
    docs: {
      description: {
        story: "Exibe o conteúdo em uma forma retangular vertical com proporção de 3:4."
      }
    }
  },
  render: () => (
    <div className='w-[300px]'>
      <AspectRatio ratio={3 / 4}>
        <img
          src="https://via.placeholder.com/300/DEDEDE/DEDEDE"
          alt="imagem exemplo"
          className="h-full w-full object-cover rounded-[0.375rem]"
        />
      </AspectRatio>
    </div>
  ),
}

export const NineToSixteen: Story = {
  args: {},
  name: '9:16',
  parameters: {
    docs: {
      description: {
        story: "Exibe o conteúdo em uma forma retangular vertical com proporção de 9:16."
      }
    }
  },
  render: () => (
    <div className='w-[300px]'>
      <AspectRatio ratio={9 / 16}>
        <img
          src="https://via.placeholder.com/300/DEDEDE/DEDEDE"
          alt="imagem exemplo"
          className="h-full w-full object-cover rounded-[0.375rem]"
        />
      </AspectRatio>
    </div>
  ),
}

export const SixteenToNine: Story = {
  args: {},
  name: '16:9',
  parameters: {
    docs: {
      description: {
        story: "Exibe o conteúdo em uma forma retangular horizontal com proporção de 16:9."
      }
    }
  },
  render: () => (
    <div className='w-[300px]'>
      <AspectRatio ratio={16 / 9}>
        <img
          src="https://via.placeholder.com/300/DEDEDE/DEDEDE"
          alt="imagem exemplo"
          className="h-full w-full object-cover rounded-[0.375rem]"
        />
      </AspectRatio>
    </div>
  ),
}

export const Circle: Story = {
  args: {},
  name: 'Circle',
  parameters: {
    docs: {
      description: {
        story: "Exibe o conteúdo em uma forma circular com proporção de 1:1."
      }
    }
  },
  render: () => (
    <div className='w-[300px]'>
      <AspectRatio ratio={1}>
        <img
          src="https://via.placeholder.com/300/DEDEDE/DEDEDE"
          alt="imagem exemplo"
          className="h-full w-full object-cover rounded-[0.375rem] rounded-full"
        />
      </AspectRatio>
    </div>
  ),
}
