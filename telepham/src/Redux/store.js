import thunk from "redux-thunk"
import {reducer as singleProductReducer} from "./Product/reducer"
import {reducer as cartReducer} from "./Cart/reducer"
import { applyMiddleware, combineReducers, legacy_createStore } from "redux"

const rootReducer = combineReducers({
   singleProductReducer,
    cartReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))