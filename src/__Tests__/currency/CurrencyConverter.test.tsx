import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import { createStore } from "redux";
import { CurrencyConverter } from "../../pages/CurrencyConverter";
import CurrencyService from "../../Services/CurrencyService";
import { rootReducer } from "../../store/rootReducer";
import { renderWithRedux } from "../utils/renderWithredux"
jest.mock("../../Services/CurrencyService")

describe('Currency converter', () => {
    let store: any;
  beforeEach(() => {
    store = createStore(rootReducer);
  });
    test('should call fetching with render', () => {
        render(renderWithRedux(<CurrencyConverter/>, '/', store))
        expect(CurrencyService.getCurrencyExchange).toBeCalled()
    })
    test('should call input value function', () => {
        render(renderWithRedux(<CurrencyConverter/>, '/', store))
        const inp = screen.getByTestId('text-input')
        userEvent.type(inp, '123')
        expect((inp as HTMLInputElement).value).toBe('1123')
    })
})