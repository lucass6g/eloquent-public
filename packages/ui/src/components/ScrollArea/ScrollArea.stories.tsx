import { Meta, StoryObj } from '@storybook/react'
import { ScrollArea, Separator } from '../'

interface Artwork {
  artist: string
  art: string
}

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`,
)

export function ScrollAreaVertical() {
  return (
    <ScrollArea.Root className="h-72 w-48 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
        {tags.map((tag) => (
          <>
            <div key={tag} className="text-sm">
              {tag}
            </div>
            <Separator className="my-2" />
          </>
        ))}
      </div>
    </ScrollArea.Root>
  )
}


const works: Artwork[] = [
  {
    artist: 'Ornella Binni',
    art: 'https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80',
  },
  {
    artist: 'Tom Byrom',
    art: 'https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80',
  },
  {
    artist: 'Vladimir Malyavko',
    art: 'https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80',
  },
]

//meta === docs do componente, os types de controls, posição do elemento, valores inicias, armazenar o componente
const meta = {
  title: 'Scroll-area',
  component: ScrollAreaVertical,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ScrollAreaVertical>

export default meta

type Story = StoryObj<typeof meta>

export const ScrollAreaHorizontal: Story = {
  args: {},
  render: () => {
    return (
      <>
        <ScrollArea.Root className="w-96 whitespace-nowrap rounded-md border">
          <div className="flex w-max space-x-4 p-4">
            {works.map((artwork) => (
              <figure key={artwork.artist} className="shrink-0">
                <div className="overflow-hidden rounded-md">
                  <image
                    href={artwork.art}
                    // alt={`Photo by ${artwork.artist}`}
                    className="aspect-[3/4] h-fit w-fit object-cover"
                    width={300}
                    height={400}
                  />
                </div>
                <figcaption className="pt-2 text-xs text-muted-foreground">
                  Photo by{' '}
                  <span className="font-semibold text-foreground">
                    {artwork.artist}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
          <ScrollArea.ScrollBar orientation="horizontal" />
        </ScrollArea.Root>
      </>
    )
  },
}
