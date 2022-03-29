export const stateMapper = (currencies, prevCurrencies) => {
    for (let key in currencies) {
        for (let i = 0; i < prevCurrencies.length; i++) {
            let prevCurr = prevCurrencies[i]
            if (prevCurr[key]) {
                currencies[key].values = {...currencies[key].values, ...prevCurr[key].values}
            } else {
                currencies[key].values = {...currencies[key].values, ...prevCurr}
            }
        }
    }
    return currencies
}
