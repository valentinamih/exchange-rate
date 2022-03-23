import logo from './logo.svg';
import './App.css';
import {useDispatch} from "react-redux";
import {requestPrevCurrency, requestСurrency} from "./redux/actions";

function App() {
  let dispatch = useDispatch()
  dispatch(requestСurrency())
  dispatch(requestPrevCurrency())
  return (
    <div className="App">

    </div>
  );
}

export default App;
