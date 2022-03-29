import {useSelector} from "react-redux";
import ListItem from "../ListItem/ListItem";
import style from './CurrencyList.module.css'

const CurrencyList = (props) => {
    const currenciesData = useSelector((state) => {
        let currencies = state.appReducer.currencies
        return currencies
    })
    return (
        <div className={style.listContainer}>
            <ul>
                {Object.keys(currenciesData).map((function (key) {
                    return <li key={currenciesData[key].NumCode}>
                        <ListItem numCode={currenciesData[key].NumCode}
                                  charCode={currenciesData[key].CharCode}
                                  name={currenciesData[key].Name}
                                  nominal={currenciesData[key].Nominal}
                                  value={currenciesData[key].Value}
                                  prevValue={currenciesData[key].Previous}
                                  diff={currenciesData[key].diff}
                                  prevValues={currenciesData[key].values}
                        />
                    </li>
                }))
                }
            </ul>
        </div>
    )
}

export default CurrencyList