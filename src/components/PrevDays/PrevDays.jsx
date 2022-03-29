import style from './PrevDays.module.css'

const PrevDays = (props) => {
    return <div className={style.prevDaysList}>
        <span>Изменение курса за последние 10 дней (₽):</span>
        {Object.keys(props.prevValue).map((function (key) {
            return <div key={key} className={style.prevDays}> <b>{key}: </b> {props.prevValue[key]}</div>
        }))}
        {Object.keys(props.values).map((function (key) {
            return <div key={key} className={style.prevDays}> <b>{key}: </b> {props.values[key]}</div>
        }))}
    </div>

}

export default PrevDays