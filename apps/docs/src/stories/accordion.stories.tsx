import { Meta, StoryObj } from "@storybook/react";
import { Accordion } from "@eloquent/ui";

const meta = {
  title: "Accordion",
  render: () => (
    <Accordion.Root type="single" collapsible>
      <Accordion.Item value="item-1">
        <Accordion.Trigger>É acessível?</Accordion.Trigger>
        <Accordion.Content>
          Sim. Ele segue o padrão de design WAI-ARIA.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.Trigger>Lorem Ipsum</Accordion.Trigger>
        <Accordion.Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl feugait
          illum tempor nobis obcaecat molestie adipiscing consectetuer sanctus
          assum aliquam esse tation nisi velit quod doming voluptua te
          sadipscing.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-3">
        <Accordion.Trigger>
          Delenit liber exerci non commodi erat quis iure aliquyam erat exerci
          obcaecat enim eros nisi.
        </Accordion.Trigger>
        <Accordion.Content>
          Blandit adipiscing te laoreet deserunt esse delenit erat culpa. Cillum
          ea labore ipsum invidunt adipisici diam ullamcorper elitr qui nostrud,
          id takimata mazim nisl nobis iure feugait ipsum dolore volutpat
          aliquam culpa minim, erat nisi clita gubergren blandit consequat
          feugait aliquyam adipisici magna anim ullamco illum. Mollit tation
          sanctus illum elitr in eleifend diam tation reprehenderit sunt
          proident esse ea nisi rebum sunt adipiscing aute ea laboris erat
          dolore. Esse nostrud sanctus incidunt elitr elit option. Dolores
          voluptate iure.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  ),
} satisfies Meta<{}>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
