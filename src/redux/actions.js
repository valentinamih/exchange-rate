import {ON_ERROR, SET_CURRENCIES, SET_DIFFERENCE, SET_PREV_CURRENCIES} from "./types";
import {dataAPI} from "../api/dataAPI";
import {formatDate} from "../utilits/formatDate";

export const onError = (error) => ({type: ON_ERROR, error})

export const requestCurrency = () => async (dispatch) => {
    try {
        let currencies = await dataAPI.getCurrentRate()
        dispatch(setCurrencies(currencies))
        setDiff(currencies)
        setPrevDate(currencies)
    }
    catch (error) {
        dispatch(onError('Something went wrong :('))
    }
}
let setPrevDate = (currencies) => {
    let date = new Date()
    date.setDate(date.getDate() - 1)
    for (let key in currencies) {
        let currency = currencies[key]
        let yesterday = currency.Previous
        currency.Previous = {}
        currency.Previous[formatDate(date)] = yesterday
}
}
let setDiff = (currencies) => {
    for (let key in currencies) {
        let currency = currencies[key]
        currency.diff = (100 * (currency.Previous - currency.Value) / currency.Value).toFixed(2)

    }
}
const setCurrencies = (currencies) => ({type: SET_CURRENCIES, currencies})

export const requestPrevCurrency = () => async (dispatch) => {
    let date = new Date()
    date.setDate(date.getDate() - 2)
    let prevDaysCurrency = []
    let counter = 8
    while (counter > 0) {
        let prevCurrencies
        try {
            prevCurrencies = await dataAPI.getPrevRate(formatDate(date));
            prevDaysCurrency.push(setCurrenciesDate(prevCurrencies, date))
            date.setDate(date.getDate() - 2)
            counter = counter - 2
        }
        catch (error) {
            prevDaysCurrency.push({[formatDate(date)]: 'нет данных на выбранный день.'})
            date.setDate(date.getDate() - 1)
            counter -= 1
        }
    }
    dispatch(setPrevCurrencies(prevDaysCurrency))
}

const setCurrenciesDate = (currencies, date) => {
    let prevDay = new Date(date.getTime())
    prevDay.setDate(prevDay.getDate() - 1)
    for (let key in currencies) {
        let currency = currencies[key]
        currency.values = {}
        currency.values[formatDate(date)] = currency.Value
        currency.values[formatDate(prevDay)] = currency.Previous
    }
    return currencies
}

const setPrevCurrencies = (prevCurrencies) => ({type: SET_PREV_CURRENCIES, prevCurrencies})

export const initializeApp = () => async (dispatch) => {
    await dispatch(requestCurrency())
    await dispatch(requestPrevCurrency())
}
