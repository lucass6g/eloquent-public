import { render, screen } from "@testing-library/react";
import { Alert } from "..";
import { Component } from 'lucide-react'

describe('Alert', () => {
    it('renders default alert', () => {
        render(
            <Alert.Root variant="default">
                <Component data-testid="icon" className="h-4 w-4" />
                <Alert.Title>Atenção!</Alert.Title>
                <Alert.Description>
                    Houve um problema com o seu cartão de crédito. Por favor, tente novamente mais tarde.
                </Alert.Description>
            </Alert.Root>
        );
        expect(screen.getByText('Atenção!')).toBeInTheDocument();
        expect(screen.getByText('Houve um problema com o seu cartão de crédito. Por favor, tente novamente mais tarde.')).toBeInTheDocument();
        expect(screen.getByTestId('icon')).toBeInTheDocument(); 
    });
    it('renders destructive alert', () => {
        render(
            <Alert.Root variant="destructive">
                <Component data-testid="icon" className="h-4 w-4" />
                <Alert.Title>Atenção!</Alert.Title>
                <Alert.Description>
                    Houve um problema com o seu cartão de crédito. Por favor, tente novamente mais tarde.
                </Alert.Description>
            </Alert.Root>
        );
        expect(screen.getByText('Atenção!')).toBeInTheDocument();
        expect(screen.getByText('Houve um problema com o seu cartão de crédito. Por favor, tente novamente mais tarde.')).toBeInTheDocument();
        expect(screen.getByTestId('icon')).toBeInTheDocument(); // Assuming Component renders an <svg> element
    });
    it('renders alert without title', () => {
        render(
            <Alert.Root variant="default">
                <Component data-testid="icon" className="h-4 w-4" />
                <Alert.Description>
                    Houve um problema com o seu cartão de crédito. Por favor, tente novamente mais tarde.
                </Alert.Description>
            </Alert.Root>
        );
        expect(screen.queryByText('Atenção!')).not.toBeInTheDocument();
        expect(screen.getByText('Houve um problema com o seu cartão de crédito. Por favor, tente novamente mais tarde.')).toBeInTheDocument();
        expect(screen.getByTestId('icon')).toBeInTheDocument(); 
    });
    it('renders alert without description', () => {
        render(
            <Alert.Root variant="default">
                <Component data-testid="icon" className="h-4 w-4" />
                <Alert.Title>Atenção!</Alert.Title>
            </Alert.Root>
        );
        expect(screen.getByText('Atenção!')).toBeInTheDocument();
        expect(screen.queryByText('Houve um problema com o seu cartão de crédito. Por favor, tente novamente mais tarde.')).not.toBeInTheDocument();
        expect(screen.getByTestId('icon')).toBeInTheDocument(); 
    });
    it('renders alert without icon', () => {
        render(
            <Alert.Root variant="default">
                <Alert.Title>Atenção!</Alert.Title>
                <Alert.Description>
                    Houve um problema com o seu cartão de crédito. Por favor, tente novamente mais tarde.
                </Alert.Description>
            </Alert.Root>
        );
        expect(screen.getByText('Atenção!')).toBeInTheDocument();
        expect(screen.getByText('Houve um problema com o seu cartão de crédito. Por favor, tente novamente mais tarde.')).toBeInTheDocument();
        expect(screen.queryByRole('svg')).not.toBeInTheDocument(); 
    });
});