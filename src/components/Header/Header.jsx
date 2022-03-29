import currency from '../../assets/currency.png'
import style from './Header.module.css'

const Header = () => {
    return <header>
        <img src={currency} alt={'currency'} className={style.logo}/>
        <h1>Курс валюты</h1>
    </header>
}
export default Header