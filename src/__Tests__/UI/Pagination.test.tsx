import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Pagination } from "../../components/UI/Pagination"

describe('pagination tests', () => {
    const pages = [1, 2, 3, 4]
    test('should render 4 buttons', () => {
        const func = jest.fn()
        render(<Pagination pages={pages} onPaginationClick={func} currentPage={1}/>)
        expect(screen.getAllByRole('button').length).toBe(4)
    })
    test('should work click func', () => {
        const func = jest.fn()
        render(<Pagination pages={pages} onPaginationClick={func} currentPage={1}/>)
        userEvent.click(screen.getAllByRole('button')[0])
        expect(func).toBeCalledWith(1)
    })
})