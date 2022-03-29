import style from './PrevDays.module.css'

const PrevDays = (props) => {
    return <div className={style.prevDaysList}>
        <span>Изменение курса за последние 10 дней (₽):</span>
        {Object.keys(props.prevValue).map((function (key) {
            return <div key={key} className={style.prevDays}> <b>{key}: </b> {isNaN(props.prevValue[key]) ?
                props.prevValue[key] : (props.prevValue[key] / props.nominal).toFixed(2)}</div>
        }))}
        {Object.keys(props.values).map((function (key) {
            return <div key={key} className={style.prevDays}> <b>{key}: </b> {isNaN(props.values[key]) ?
                props.values[key] : (props.values[key] / props.nominal).toFixed(2)}</div>
        }))}
    </div>
}

export default PrevDays