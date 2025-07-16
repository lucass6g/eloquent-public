import { it, describe, expect, beforeAll, afterAll, beforeEach } from "vitest"
import { render, RenderResult, screen, waitFor } from '@testing-library/react';
import { Avatar } from '.';


describe('Avatar Component', () => {
    it('renders Avatar with fallback', () => {
        const component = render(
            <Avatar.Root>
                <Avatar.Fallback>Elo</Avatar.Fallback>
            </Avatar.Root>
        );
        const fallback = screen.getByText('Elo');
        expect(fallback).toBeInTheDocument();
        expect(component.baseElement).toMatchSnapshot();
    });
    it('applies correct size variants classes', async () => {
        const component = render(
            <Avatar.Root data-testid="root-element" size="xl">
                <Avatar.Fallback fontSize="lg">Elo</Avatar.Fallback>
            </Avatar.Root>
        );
        let rootElement = screen.getByTestId('root-element');
        let fallbackElement = screen.getByText('Elo');

        await waitFor(() => {
            expect(rootElement).toHaveClass('h-24 w-24');
            expect(fallbackElement).toHaveClass('text-lg');
            expect(component.baseElement).toMatchSnapshot();
        })
        component.rerender(
            <Avatar.Root size="sm">
                <Avatar.Fallback fontSize="sm">Elo</Avatar.Fallback>
            </Avatar.Root>
        );

        await waitFor(() => {
            fallbackElement = screen.getByText('Elo');
            expect(rootElement).toHaveClass('h-10 w-10');
            expect(fallbackElement).toHaveClass('text-sm');
            expect(component.baseElement).toMatchSnapshot();
        })
    });
});

describe('Avatar with valid image', () => {
    let rendered: RenderResult;
    let image: HTMLElement | null = null;
    const orignalGlobalImage = window.Image;
  
    beforeAll(() => {
      (window.Image as any) = class MockImage {
        onload: () => void = () => {};
        src: string = '';
        constructor() {
          setTimeout(() => {
            this.onload();
          }, 300);
          return this;
        }
      };
    });
  
    afterAll(() => {
      window.Image = orignalGlobalImage;
    });
  
    beforeEach(() => {
      rendered = render(
        <Avatar.Root data-testid='avatar-root'>
          <Avatar.Fallback>Avatar Shad</Avatar.Fallback>
          <Avatar.Image src="/test" alt="@shadcn" />
        </Avatar.Root>
      );
    });
  
    it('should render the fallback initially', () => {
      const fallback = rendered.queryByText('Avatar Shad');
      expect(fallback).toBeInTheDocument();
      expect(rendered.baseElement).toMatchSnapshot();
    });
  
    it('should render the image after it has loaded', async () => {
      image = await rendered.findByRole('img');
      expect(image).toBeInTheDocument();
      expect(rendered.baseElement).toMatchSnapshot();
    });
  
    it('should have alt text on the image', async () => {
      image = await rendered.findByAltText('@shadcn');
      expect(image).toBeInTheDocument();
      expect(rendered.baseElement).toMatchSnapshot();
    });
  });