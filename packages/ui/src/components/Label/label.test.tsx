import { render, screen } from '@testing-library/react';
import {it, describe, expect} from "vitest"
import { Label } from '.';

describe("Label", () => {
    it("should render the component correctly", () => {
        render(<Label>Nome da Página</Label>)
        const labelElement = screen.getByText("Nome da Página")
        expect(labelElement).toBeInTheDocument()
    }
)
})