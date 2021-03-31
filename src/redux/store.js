import {createStore, applyMiddleware} from "redux";
import reduxThunk from "redux-thunk";
import reducers from "../js/reducers/index";

const store = createStore(
    reducers,
    applyMiddleware(
        reduxThunk,
    ),
);

export default function getStore() {
    return store;
}