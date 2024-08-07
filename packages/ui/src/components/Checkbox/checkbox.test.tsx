import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Checkbox } from '.';
describe('Checkbox Component', () => {
    it('renders the default Checkbox', () => {
        const component =  render(
            <Checkbox.Root>
                <Checkbox.Button id="terms" />
                <Checkbox.Label htmlFor="terms">Aceitar termos e condições da promoção</Checkbox.Label>
                <Checkbox.HelperText>Você concorda com nossos Termos de Serviço e Política de Privacidade.</Checkbox.HelperText>
            </Checkbox.Root>
        );
        const checkbox = screen.getByRole('checkbox', { name: /aceitar termos e condições da promoção/i });
        const helperText = screen.getByText(/você concorda com nossos termos de serviço e política de privacidade/i);
        expect(checkbox).toBeInTheDocument();
        expect(helperText).toBeInTheDocument();
        expect(checkbox).not.toBeChecked();
        fireEvent.click(checkbox);
        expect(checkbox).toBeChecked();
        expect(component.baseElement).toMatchSnapshot();
    });
    it('renders the disabled Checkbox', () => {
        const component = render(
            <Checkbox.Root disabled>
                <Checkbox.Button disabled id="terms" />
                <Checkbox.Label htmlFor="terms">Aceitar termos e condições da promoção</Checkbox.Label>
                <Checkbox.HelperText>Você concorda com nossos Termos de Serviço e Política de Privacidade.</Checkbox.HelperText>
            </Checkbox.Root>
        );
        const checkbox = screen.getByRole('checkbox', { name: /aceitar termos e condições da promoção/i });
        expect(checkbox).toBeDisabled();
        expect(component.baseElement).toMatchSnapshot();
    });
    it('renders Checkbox with label', () => {
        render(
            <Checkbox.Root>
                <Checkbox.Button id="terms1" />
                <Checkbox.Label htmlFor="terms1">Aceitar termos e condições da promoção</Checkbox.Label>
            </Checkbox.Root>
        );
        const checkbox = screen.getByRole('checkbox', { name: /aceitar termos e condições da promoção/i });
        expect(checkbox).toBeInTheDocument();
        expect(checkbox).not.toBeChecked();
        fireEvent.click(checkbox);
        expect(checkbox).toBeChecked();
    });
    it('renders Checkbox with helper text', () => {
        render(
            <Checkbox.Root>
                <Checkbox.Button id="terms2" />
                <Checkbox.Label htmlFor="terms2">Aceitar termos e condições da promoção</Checkbox.Label>
                <Checkbox.HelperText>Você concorda com nossos Termos de Serviço e Política de Privacidade.</Checkbox.HelperText>
            </Checkbox.Root>
        );
        const helperText = screen.getByText(/você concorda com nossos termos de serviço e política de privacidade/i);
        expect(helperText).toBeInTheDocument();
    });
});