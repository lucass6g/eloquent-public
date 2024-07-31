import { render, screen } from "@testing-library/react"
import { it, describe, expect } from "vitest"
import { Input } from ".."
import { inputVariants } from "../Root/variants"

describe("InputPattern", () => {
    it("should receive the input variants", async () => {
        render(<Input.Pattern format="(##) # ####-####" placeholder="Digite seu telefone" />)
        const input = screen.getByPlaceholderText("Digite seu telefone")
        expect(input).toHaveClass(inputVariants())
    })
})