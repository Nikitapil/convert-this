import { takeEvery, put, call } from "redux-saga/effects";
import { ECurrencyActions } from "../domain/currencyTypes";
import CurrencyService from "../Services/CurrencyService";
import { setCurrencyError, setCurrencyOptions } from "./currencyActionCreaters";

function* getCurrencyOptions(): any {
    try {
       const response = yield call(CurrencyService.getSymbols)
       yield put(setCurrencyOptions(response))
    } catch (error: any) {
        yield put(setCurrencyError(error.message))
    }
}

export function* sagaWatcher() {
    yield takeEvery(ECurrencyActions.FETCH_CURRENCY_OPTIONS, getCurrencyOptions)
}