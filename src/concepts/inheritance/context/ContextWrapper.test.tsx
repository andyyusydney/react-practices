
import userEvent from '@testing-library/user-event';
import { render, screen } from "@testing-library/react"
import React from "react"
import ContextWrapper from "./ContextWrapper"

describe('<ContextWrapper />', () => {
	beforeEach(() => {
		render(<ContextWrapper />)
	})

	it('display hello text', () => {
		expect(screen.getByText('Hello!')).toBeInTheDocument()
	})

	it('display Increment button', () => {
		expect(screen.getByRole('button')).toBeInTheDocument()
	})

	it('display initial value of counter', () => {
		expect(screen.queryByText(/Counter: 0/)).toBeInTheDocument()
	})

	it('increment counter after clicking button', async () => {
		await userEvent.click(screen.getByRole('button'), {bubbles: true})
		const conterText = await screen.queryByText(/Counter: 1/)
		expect(conterText).toBeInTheDocument()
	})
})