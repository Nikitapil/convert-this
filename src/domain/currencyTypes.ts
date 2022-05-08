import { IOptions } from "../components/UI/CustomSelect"

export enum ECurrencyActions {
    SET_BASE_CURRENCY = 'SET_BASE_CURRENCY',
    SET_CURRENCY_OPTIONS = 'SET_CURRENCY_OPTIONS',
    FETCH_CURRENCY_OPTIONS = 'FETCH_CURRENCY_OPTIONS',
    SET_CURRENCY_ERROR = 'SET_CURRENCY_ERROR'
}

export interface CurrencySymbols {
    [key: string]: {
        description: string
    }
}
export interface ICurrencyState {
    baseCurrency: string,
    currencyOptions: IOptions[] | null,
    currencyError: string
}

export interface ISetBaseCurrencyAction {
    type: ECurrencyActions.SET_BASE_CURRENCY,
    payload: string
}
export interface ISetCurrencyOptionsAction {
    type: ECurrencyActions.SET_CURRENCY_OPTIONS,
    payload: IOptions[]
}

export interface ISetCurrencyErrorAction {
    type: ECurrencyActions.SET_CURRENCY_ERROR,
    payload: string
}

export type CurrencyActions = ISetBaseCurrencyAction | ISetCurrencyOptionsAction | ISetCurrencyErrorAction