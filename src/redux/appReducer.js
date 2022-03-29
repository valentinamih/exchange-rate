import {ON_ERROR, SET_CURRENCIES, SET_DIFFERENCE, SET_PREV_CURRENCIES} from "./types";
import {stateMapper} from "../utilits/stateMapper";

let initialState = {
    currencies: {},
    error: null,
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENCIES:
            return {
                ...state, currencies: action.currencies
            }
        case SET_PREV_CURRENCIES:
            return {
                ...state, currencies: {...stateMapper(state.currencies, action.prevCurrencies)}
            }
        case ON_ERROR:
            return {
                ...state, error: action.error
            }
        default:
            return state
    }
}