import { setBaseCurrency, setCurrencyOptions } from "../store/currencyActionCreaters";

describe("actionCreators tests", () => {
  test("setBaseCurrency test", () => {
    const action = setBaseCurrency("123");
    expect(action).toEqual({
      type: "SET_BASE_CURRENCY",
      payload: "123",
    });
  });
  test("setCurrencyOptions test", () => {
    const action = setCurrencyOptions([{text: '123', value:'123'}]);
    expect(action).toEqual({
      type: "SET_CURRENCY_OPTIONS",
      payload: [{text: '123', value:'123'}],
    });
  });
});
