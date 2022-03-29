import style from './ListItem.module.css'
import up from '../../assets/up.png'
import down from '../../assets/down.png'
import {useState} from "react";
import PrevDays from "../PrevDays/PrevDays";

const ListItem = (props) =>  {
    let [fullMode, setMode] = useState(false)
    let toggleFullMode = () => {
        setMode(!fullMode)
    }
    return (
        <div >
            <div className={style.tooltip}>
                <div className={style.itemContainer} onClick={toggleFullMode}>
                    <div className={style.charCode}>
                        {props.charCode}
                    </div>
                    <div className={style.value}>
                        {(props.value / props.nominal).toFixed(2)} ₽
                    </div>
                    <div className={style.diff}>
                        {props.diff > 0 ? <img className={style.diffImage} src={up} /> : <img className={style.diffImage} src={down} />}
                        {props.diff} %
                    </div>
                </div>
                <div>
                    <span className={style.tooltipText}>{props.name}</span>
                </div>
            </div>
            {fullMode ? <PrevDays prevValue={props.prevValue} values={props.prevValues} nominal={props.nominal} /> : null}
        </div>
    )
}

export default ListItem