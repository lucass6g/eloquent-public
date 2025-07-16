import { render, screen } from '@testing-library/react';
import { Label } from '../Label';
import { Textarea } from '.';
import { HelperText } from '../HelperText';
import { describe, expect, it } from 'vitest';

const mockTextAreaComponent = (<div className="w-full gap-1.5">
    <Label htmlFor="message-2" className='text-neutral-800 mb-2'>Título</Label>
    <Textarea placeholder="Digite sua mensagem aqui." id="message-2" />
    <HelperText.Label className="text-neutral-500">
        Seu texto de apoio aparecerá aqui.
    </HelperText.Label>
</div>)


describe('Textarea Component', () => {
    it('renders DefaultStory correctly', () => {
        const component = render(mockTextAreaComponent);
        const textarea = screen.getByPlaceholderText('Digite sua mensagem aqui.');
        expect(textarea).toBeInTheDocument();
        expect(component.baseElement).toMatchSnapshot();
    });
    it('renders WithHelper correctly', () => {
        render(mockTextAreaComponent);
        const label = screen.getByText('Título');
        const helperText = screen.getByText('Seu texto de apoio aparecerá aqui.');
        expect(label).toBeInTheDocument();
        expect(helperText).toBeInTheDocument();
    });
});