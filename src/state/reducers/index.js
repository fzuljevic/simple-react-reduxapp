import { combineReducers } from "redux";
import accountReducers from "./accountReducer"

export const reducers = combineReducers ({
    account: accountReducers
})
