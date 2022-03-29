import './App.css';
import {useDispatch} from "react-redux";
import {initializeApp} from "./redux/actions";
import {useEffect} from "react";
import CurrencyList from "./components/CurrencyList/CurrencyList";
import Header from './components/Header/Header'


function App() {
  let dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeApp())
  }, [dispatch])
  return (
    <div className='App'>
      <Header />
      <CurrencyList />
    </div>
  );
}

export default App;
