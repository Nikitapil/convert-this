import { CurrencyActions, ECurrencyActions, ICurrencyState } from "./../domain/currencyTypes";

const initialState: ICurrencyState = {
  baseCurrency: "USD",
  currencyOptions: null,
  currencyError: ''
};

export const currencyReducer = (
  state = initialState,
  action: CurrencyActions
) => {
  switch (action.type) {
    case ECurrencyActions.SET_BASE_CURRENCY:
      return { ...state, baseCurrency: action.payload };
    case ECurrencyActions.SET_CURRENCY_OPTIONS:
      return { ...state, currencyOptions: action.payload };
    case ECurrencyActions.SET_CURRENCY_ERROR:
      return {...state, currencyError: action.payload}
    default:
      return state;
  }
};
