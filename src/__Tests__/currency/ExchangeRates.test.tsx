import { render } from "@testing-library/react";
import { createStore } from "redux";
import { ExchangeRates } from "../../pages/ExchangeRates";
import CurrencyService from "../../Services/CurrencyService";
import { rootReducer } from "../../store/rootReducer";
import { renderWithRedux } from "../utils/renderWithredux";

jest.mock("../../Services/CurrencyService")

describe('Currency converter', () => {
    let store: any;
  beforeEach(() => {
    store = createStore(rootReducer);
  });
    test('should call fetching with render', () => {
        render(renderWithRedux(<ExchangeRates/>, '/', store))
        expect(CurrencyService.getExchangeRates).toBeCalled()
    })
})