import { IOptions } from '../components/UI/CustomSelect';
import { CurrencySymbols } from './../domain/currencyTypes';
export const mapCurrencySymbols = (data: CurrencySymbols) => {
   return Object.keys(data).reduce((acc: IOptions[], item: string) => {
        const symbol = {
            text: data[item].description,
            value: item
        }
        acc.push(symbol)
        return acc
    }, [])
}