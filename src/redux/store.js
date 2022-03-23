import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {appReducer} from "./appReducer";

let reducers = combineReducers({
    appReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducers, /* preloadedState, */composeEnhancers(
    applyMiddleware(thunk)
));