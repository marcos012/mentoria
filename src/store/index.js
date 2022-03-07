import { combineReducers, createStore } from "redux";
import counter from './docks/Counter';

const rootReducer = combineReducers({ counter });

const store = createStore(rootReducer);

export default store;