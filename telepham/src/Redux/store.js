import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import {reducer as singleProductReducer} from "./Product/reducer"
import {reducer as cartReducer} from "./Cart/reducer"
import { reducer as AdminReducer } from './AdminReducer/reducer'
import {reducer as ProductReducer} from "./productReducer/reducer"
import thunk from "redux-thunk"


const rootReducer = combineReducers({
  AdminReducer,
  ProductReducer,
  singleProductReducer,
  cartReducer,
})
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))
