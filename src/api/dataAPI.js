import axios from 'axios'

export const dataAPI = {
    getCurrentRate () {
        return axios.get('https://www.cbr-xml-daily.ru/daily_json.js')
            .then(response => response.data.Valute)
    },
    getPrevRate (date) {
        return axios.get(`https://www.cbr-xml-daily.ru/archive/${date}/daily_json.js`)
            .then(response => response.data.Valute)
    }
}