import { combineReducers } from "redux";
import { currencyReducer } from "./CurrencyReducer";

export const rootReducer = combineReducers({
    currency: currencyReducer
})

export type RootState = ReturnType<typeof rootReducer>