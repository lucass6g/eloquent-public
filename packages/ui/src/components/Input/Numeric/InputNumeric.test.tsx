import { render, screen } from "@testing-library/react"
import { it, describe, expect } from "vitest"
import { Input } from ".."
import { inputVariants } from "../Root/variants"

describe("InputNumeric", () => {
    it("should receive the input variants", async () => {
        render(<Input.Numeric placeholder="Digite o valor do cashback" />)
        const input = screen.getByPlaceholderText("Digite o valor do cashback")
        expect(input).toHaveClass(inputVariants())
    })
})