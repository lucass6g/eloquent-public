import {render, screen, waitFor} from "@testing-library/react";
import {it, describe, expect, vi} from "vitest"
import {Button} from "."
import userEvent from "@testing-library/user-event";

describe('Button component', () => {
    it('should renders correctly', () => {
      render(<Button>Clique aqui</Button>);
      const button = screen.getByRole("button", {name: "Clique aqui"});
      expect(button).toBeInTheDocument();
    });
  
    it('should handles click events', async () => {
      const handleClick = vi.fn();
      render(<Button onClick={handleClick}>Clique aqui</Button>);
      const button = screen.getByRole("button", {name: "Clique aqui"});
      await waitFor(() => userEvent.click(button));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  
    it('should not click when it is disabled', async () => {
        const handleClick = vi.fn();
        render(<Button disabled onClick={handleClick}>Clique aqui</Button>);
        const button = screen.getByRole("button", {name: "Clique aqui"});
        await waitFor(() => userEvent.click(button));
        expect(handleClick).toHaveBeenCalledTimes(0);
      });
    
    it('should renders as a different component when asChild is true', () => {
      render(<Button asChild><span>Not a button</span></Button>);
      expect(screen.getByText('Not a button').tagName).not.toBe('BUTTON');
    });

    it("should render a button with the 'variant' class", () => {
        const {rerender} = render(<Button variant="default">Default</Button>);
        const buttonDefault = screen.getByRole("button", {name: "Default"});
        expect(buttonDefault).toHaveClass("bg-primary")

        rerender(<Button variant="secondary">Secondary</Button>);
        const buttonSecondary = screen.getByRole("button", {name: "Secondary"});
        expect(buttonSecondary).toHaveClass("text-secondary-foreground")

        rerender(<Button variant="destructive">Destructive</Button>);
        const buttonDestructive = screen.getByRole("button", {name: "Destructive"});
        expect(buttonDestructive).toHaveClass("bg-destructive")

        rerender(<Button variant="link">Link</Button>);
        const buttonLink = screen.getByRole("button", {name: "Link"});
        expect(buttonLink).toHaveClass("underline")

        rerender(<Button variant="icon">Icon</Button>);
        const buttonIcon = screen.getByRole("button", {name: "Icon"});
        expect(buttonIcon).toHaveClass("p-0")

        rerender(<Button variant="badge">Badge</Button>);
        const buttonBadge = screen.getByRole("button", {name: "Badge"});
        expect(buttonBadge).toHaveClass("bg-primary text-sm text-primary-foreground min-w-fit max-w-fit max-h-6 cursor-pointer")
    })

    it("should render icon when 'loading' prop is passed", () => {
      render(<Button loading>With Loading</Button>);
      const button = screen.getByRole("button", {name: "Carregando..."});
      const svgIcon = button.querySelector("svg");
      expect(svgIcon).toHaveClass("animate-spin");
    })

    it("should render text when 'labelLoading' prop is passed", () => {
      render(<Button loading labelLoading="Enviando...">With Loading</Button>);
      const button = screen.getByRole("button", {name: "Enviando..."});
      expect(button).toBeInTheDocument();
    })

    it("should remove 'labelLoading' when 'size=icon' prop is passed", () => {
      render(<Button loading labelLoading="Enviando..." size="icon">With Loading</Button>);
      const loadingText = screen.queryByText("Enviando...");
      expect(loadingText).not.toBeInTheDocument();
    })
});