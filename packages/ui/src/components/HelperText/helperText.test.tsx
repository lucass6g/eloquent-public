import {describe, it, expect} from "vitest"
import {screen, render} from "@testing-library/react"
import { HelperText } from "."

describe("HelperText", () => {
  it("should render correctly", () => {
    render(
        <HelperText.Root>
            <HelperText.Label>Seu texto de apoio.</HelperText.Label>
        </HelperText.Root>
    )
    const helperText = screen.getByText("Seu texto de apoio.")
    expect(helperText).toBeInTheDocument()
  })
})