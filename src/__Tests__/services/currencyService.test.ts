import CurrencyService from "../../Services/CurrencyService"
import axios from "axios";

jest.mock("axios")

describe('currency service tests', () => {
    test('getSymbols functions', () => {
        CurrencyService.getSymbols()
        CurrencyService.getCurrencyExchange('BYN', 'USD', '1')
        CurrencyService.getExchangeRates('BYN')
       expect(axios.get).toHaveBeenCalledTimes(3)
    })

})