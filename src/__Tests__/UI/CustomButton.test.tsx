import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { CustomButton } from "../../components/UI/CustomButton"

describe('Custom button tests', () => {
    test('button should be clickable', () => {
        const func = jest.fn()
        render(<CustomButton onClick={func}>Button</CustomButton>)
        const btn = screen.getByRole('button', {name: 'Button'})
        userEvent.click(btn)
        expect(func).toBeCalled()
    })
})