import { getByText, render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { CustomSelect } from "../../components/UI/CustomSelect"

describe('custom select tests', () => {
    test('should render all option', () => {
        const changeFunc = jest.fn()
        const options = [{
            text: 'text1',
            value: 'value'
        }, {
            text: 'text2',
            value: 'value2'
        }]
        render(<CustomSelect options={options} value='value' onChange={changeFunc}/>)
        expect(screen.getAllByRole('option').length).toBe(2)
    })
    test('should call change function', () => {
        const changeFunc = jest.fn()
        const options = [{
            text: 'text1',
            value: 'value'
        }, {
            text: 'text2',
            value: 'value2'
        }]
        render(<CustomSelect options={options} value='value' onChange={changeFunc}/>)
        userEvent.selectOptions(screen.getByTestId('custom-select'), screen.getByText('text2'))
        expect(changeFunc).toBeCalled()
    })
    test('should have right id', () => {
        const changeFunc = jest.fn()
        const options = [{
            text: 'text1',
            value: 'value'
        }, {
            text: 'text2',
            value: 'value2'
        }]
        render(<CustomSelect options={options} value='value' onChange={changeFunc} id='123'/>)
        expect(screen.getByTestId('custom-select').id).toBe('123')
    })
})