import {ON_ERROR, SET_CURRENCIES, SET_PREV_CURRENCIES} from "./types";
import {dataAPI} from "../api/dataAPI";

export const onError = (error) => ({type: ON_ERROR, error})

export const requestСurrency = () => async (dispatch) => {
    try {
        let currencies = await dataAPI.getCurrentRate()
        dispatch(setCurrencies(currencies))
    }
    catch (error) {
        dispatch(onError('Something went wrong :('))
    }
}

const setCurrencies = (currencies) => ({type: SET_CURRENCIES, currencies})

export const requestPrevCurrency = () => async (dispatch) => {
    let prevDaysCurrency = []
    let months = ['01','02','03','04','05','06','07','08','09','10','11','12']
    for (let i = 1; i <= 10; i++) {
        let prevDay = new Date(Date.now()-(86400000 * i))
        try {
            let prevDayConverted = `${prevDay.getFullYear()}/${months[prevDay.getMonth()]}/${prevDay.getDate()}`
            let prevCurrencies = await dataAPI.getPrevRate(prevDayConverted)
            prevDaysCurrency.push(prevCurrencies)
        }
        catch (error) {
            prevDaysCurrency.push(`The exchange rate isn't set for 
            ${prevDay.getDate()}.${months[prevDay.getMonth()]}.${prevDay.getFullYear()}`)
        }
    }
    dispatch(setPrevCurrencies(prevDaysCurrency))
}

const setPrevCurrencies = (prevCurrencies) => ({type: SET_PREV_CURRENCIES, prevCurrencies})
