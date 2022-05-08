import { mapCurrencySymbols } from './../mappers/currencyMappers';
describe('currency mapper test', () => {
    const data = {"HKD":{"description":"Hong Kong Dollar","code":"HKD"},"HNL":{"description":"Honduran Lempira","code":"HNL"}}
    test('should return proper array', () => {
       const result = mapCurrencySymbols(data)
       const expected = [{value: "HKD", text:'Hong Kong Dollar'}, {value: "HNL", text:'Honduran Lempira'}]
       expect(result).toEqual(expected)
    })
})