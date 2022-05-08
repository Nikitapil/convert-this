import React, { useEffect, useState } from "react";
import { CustomSelect } from "../components/UI/CustomSelect";
import { TextInput } from "../components/UI/TextInput";
import { useFetch } from "../hooks/useFetch";
import CurrencyService from "../Services/CurrencyService";
import { useDispatch } from "react-redux";
import {fetchCurrencyOptions, setBaseCurrency} from '../store/currencyActionCreaters'
import { useTypedSelector } from "../hooks/useTypedSelector";
export const CurrencyConverter = () => {

  const {baseCurrency, currencyOptions, currencyError} = useTypedSelector(state => state.currency)
  const [currencyValue, setCurrencyValue] = useState('1');
  const [toCurrency, setToCurrency] = useState('BYN')
  const [result, setResult] = useState('')
  const dispatch = useDispatch()
  const [fetchCurrency, isCurrencyLoading, isCurrencyError] = useFetch(async () => {
    const res = await CurrencyService.getCurrencyExchange(baseCurrency, toCurrency, currencyValue)
    setResult(res)
  })

  useEffect(() => {
    dispatch(fetchCurrencyOptions())
  }, [])


  useEffect(() => {
    fetchCurrency()
  }, [baseCurrency, toCurrency, currencyValue])

  const onChangeCurrencyValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrencyValue(e.target.value);
  };

  const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if(e.target.id === 'base-currency') {
      dispatch(setBaseCurrency(e.target.value))
    }
    if(e.target.id === 'to-currency') {
        setToCurrency(e.target.value)
    }
  }

  if(isCurrencyError || currencyError) {
    return (
      <div>
        Ooops Something went wrong...Please refresh the page and try again.
      </div>
    )
  }

  return (
    <main className="currency-converter">
      <h2 className="currency-converter__title">Converter</h2>
      <form className="currency-converter__form">
        <TextInput
          label="Convert"
          width={80}
          value={currencyValue}
          onChange={onChangeCurrencyValue}
          type="number"
        />
        <CustomSelect id="base-currency" value={baseCurrency} options={currencyOptions} onChange={onSelectChange} className='currency-converter__select'/>
        <CustomSelect label='into' id="to-currency" value={toCurrency} options={currencyOptions} onChange={onSelectChange} className='currency-converter__select'/>
      </form>
      <p className="currency-converter__output">{result}</p>
    </main>
  );
};
