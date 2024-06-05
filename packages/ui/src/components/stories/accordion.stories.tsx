import {Meta, StoryObj} from "@storybook/react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '../accordion'

const meta = {
    title: 'components/Accordion',
    render: () => (
        <Accordion type="single" collapsible className="w-80">
            <AccordionItem value="item-1">
                <AccordionTrigger>É acessível?</AccordionTrigger>
                <AccordionContent>
                    Sim. Ele segue o padrão de design WAI-ARIA.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>Lorem Ipsum</AccordionTrigger>
                <AccordionContent>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl feugait illum tempor nobis obcaecat molestie adipiscing consectetuer sanctus assum aliquam esse tation nisi velit quod doming voluptua te sadipscing.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>Delenit liber exerci non commodi erat quis iure aliquyam erat exerci obcaecat enim eros nisi.</AccordionTrigger>
                <AccordionContent>
                    Blandit adipiscing te laoreet deserunt esse delenit erat culpa. Cillum ea labore ipsum invidunt adipisici diam ullamcorper elitr qui nostrud, id takimata mazim nisl nobis iure feugait ipsum dolore volutpat aliquam culpa minim, erat nisi clita gubergren blandit consequat feugait aliquyam adipisici magna anim ullamco illum. Mollit tation sanctus illum elitr in eleifend diam tation reprehenderit sunt proident esse ea nisi rebum sunt adipiscing aute ea laboris erat dolore. Esse nostrud sanctus incidunt elitr elit option. Dolores voluptate iure.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    ),
} satisfies Meta<{}>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {},
}
