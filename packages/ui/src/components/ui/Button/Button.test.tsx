import { render, screen }       from '@testing-library/react';
import { expect, test } from 'vitest';
import {Button} from './index.tsx'

test('test', () => {
	render(<Button />);
	const buttonElement = screen.getByRole('button');
	expect(buttonElement).toBeDefined()
})
