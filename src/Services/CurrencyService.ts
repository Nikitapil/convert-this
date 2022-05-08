import axios from "axios";
import { mapCurrencySymbols } from "../mappers/currencyMappers";

export default class CurrencyService {
    static async getSymbols() {
        const response = await axios.get('https://api.exchangerate.host/symbols')
        return mapCurrencySymbols(response.data.symbols)
    }

    static async getCurrencyExchange(baseCurrency: string, toCurrency: string, amount: string) {
        const response = await axios.get(`https://api.exchangerate.host/convert?from=${baseCurrency}&to=${toCurrency}&amount=${amount}`)
        return response.data.result.toFixed(2)
    }

    static async getExchangeRates(baseCurrency: string) {
        const response = await axios.get(`https://api.exchangerate.host/latest?base=${baseCurrency}`)
        return response.data.rates
    }
}