import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { CustomSelect } from '../components/UI/CustomSelect'
import { Pagination } from '../components/UI/Pagination'
import { useFetch } from '../hooks/useFetch'
import { useTypedSelector } from '../hooks/useTypedSelector'
import CurrencyService from '../Services/CurrencyService'
import { fetchCurrencyOptions, setBaseCurrency } from '../store/currencyActionCreaters'

export const ExchangeRates = () => {
  const {baseCurrency, currencyOptions} = useTypedSelector(state => state.currency)
  const [rates, setRates] = useState(null)
  const [page, setPage] = useState(1)
  const dispatch = useDispatch()
  const [fetchRates] = useFetch(async () => {
    const res = await CurrencyService.getExchangeRates(baseCurrency)
    setRates(res)
  })

  useEffect(() => {
    if(!currencyOptions) {
      dispatch(fetchCurrencyOptions())
    }
  }, [])

  useEffect(() => {
    fetchRates()
  }, [baseCurrency])

  const paginationArray = useMemo(() => {
    return rates ? Array.from({length: Math.ceil(Object.keys(rates).length / 10)}, (a, b) => b+1) : null
  }, [rates])

  const onPaginationClick = (page: number) => {
    setPage(page)
  }

  const renderedRates = useMemo(() => {
    const index = page*10
    return rates ? Object.keys(rates).slice(index-10, index).map(rate => ({
      currency: rate,
      rate: rates[rate]
    })) : null
  }, [page, rates])
  
  const onSelectChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setBaseCurrency(e.target.value))
  }

  return (
    <main className='exchange-rates'>
      <h1 className='exchange-rates__title'>Echange Rates</h1>
      <CustomSelect id="base-currency" value={baseCurrency} options={currencyOptions} onChange={onSelectChange} className='currency-converter__select exchange__select'/>
      <table className='exchange-rates_table'>
        <thead>
          <td>Currency</td>
          <td>Rate</td>
        </thead>
        <tbody>
            {renderedRates && renderedRates.map(rate => {
              return (
            <tr>
            <td>{rate.currency}</td>
            <td>{rate.rate}</td>
          </tr>
              )
            })}
        </tbody>
      </table>
      <Pagination pages={paginationArray} currentPage={page} onPaginationClick={onPaginationClick}/>
    </main>
  )
}
