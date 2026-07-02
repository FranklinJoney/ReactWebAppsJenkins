import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('App', () => {
  test('renders heading and increments counter', async () => {
    render(<App />)

    // heading present
    expect(screen.getByText(/Get started with react/i)).toBeInTheDocument()

    // counter starts at 0 and increments
    const btn = screen.getByRole('button', { name: /Count is 0/i })
    await userEvent.click(btn)
    expect(screen.getByRole('button', { name: /Count is 1/i })).toBeInTheDocument()
  })
})
