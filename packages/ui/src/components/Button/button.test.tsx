import { render, screen, waitFor } from "@testing-library/react";
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
        expect(buttonDefault).toHaveClass("bg-green-dark-600")

        rerender(<Button variant="secondary">Secondary</Button>);
        const buttonSecondary = screen.getByRole("button", {name: "Secondary"});
        expect(buttonSecondary).toHaveClass("text-accent-foreground")

        rerender(<Button variant="destructive">Destructive</Button>);
        const buttonDestructive = screen.getByRole("button", {name: "Destructive"});
        expect(buttonDestructive).toHaveClass("bg-red-600")

        rerender(<Button variant="link">Link</Button>);
        const buttonLink = screen.getByRole("button", {name: "Link"});
        expect(buttonLink).toHaveClass("underline")

        rerender(<Button variant="icon">Icon</Button>);
        const buttonIcon = screen.getByRole("button", {name: "Icon"});
        expect(buttonIcon).toHaveClass("p-0")

        rerender(<Button variant="badge">Badge</Button>);
        const buttonBadge = screen.getByRole("button", {name: "Badge"});
        expect(buttonBadge).toHaveClass("bg-green-dark-600 text-sm text-neutral-100 min-w-fit max-w-fit max-h-6 cursor-pointer")
    })
  });