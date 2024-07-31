import { fireEvent, render, RenderResult, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Collapsible } from '.';

const TRIGGER_TEXT = '@peduarte marcou 3 repositórios com estrela';
const CONTENT_TEXT = '@eloquent/tokens';


const CollapsibleTest = (props: React.ComponentProps<typeof Collapsible.Root>) => (
    <Collapsible.Root
        {...props}
    >
        <Collapsible.Trigger title={TRIGGER_TEXT} open={props.open} />
        <div data-content>
            @eloquent/react
        </div>
        <Collapsible.Content className='w-[400px]'>
            <div>
                {CONTENT_TEXT}
            </div>
        </Collapsible.Content>
    </Collapsible.Root >
);

describe('Collapsible component', () => {
    let rendered: RenderResult;
    let trigger: HTMLElement;
    let content: HTMLElement | null;

    beforeEach(() => {
        rendered = render(<CollapsibleTest />);
        trigger = rendered.getByText(TRIGGER_TEXT);
    });

    it('should render the Collapsible component and toggle content visibility', () => {
        expect(screen.getByText(TRIGGER_TEXT)).toBeInTheDocument();
        fireEvent.click(trigger);
        expect(screen.getByText(CONTENT_TEXT)).toBeInTheDocument();
        expect(rendered.baseElement).toMatchSnapshot();
    });

    describe('when clicking the trigger', () => {
        beforeEach(async () => {
            fireEvent.click(trigger);
            content = rendered.queryByText(CONTENT_TEXT);
        });

        it('should open the content', () => {
            expect(content).toBeVisible();
        });

        describe('and clicking the trigger again', () => {
            beforeEach(() => {
                fireEvent.click(trigger);
            });

            it('should close the content', () => {
                expect(content).not.toBeVisible();
            });
        });
    });
});