import { IOptions } from "../components/UI/CustomSelect"
import { ECurrencyActions, ISetBaseCurrencyAction } from "../domain/currencyTypes"

export const setBaseCurrency = (payload:string):ISetBaseCurrencyAction  => {
    return {
        type: ECurrencyActions.SET_BASE_CURRENCY,
        payload 
    }
}
export const setCurrencyOptions = (payload:IOptions[]) => {
    return {
        type: ECurrencyActions.SET_CURRENCY_OPTIONS,
        payload
    }
}
export const fetchCurrencyOptions = () => {
    return {
        type: ECurrencyActions.FETCH_CURRENCY_OPTIONS,
    }
}

export const setCurrencyError = (payload:string)  => {
    return {
        type: ECurrencyActions.SET_CURRENCY_ERROR,
        payload 
    }
}