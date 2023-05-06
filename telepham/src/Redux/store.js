import {applyMiddleware, combineReducers, legacy_createStore} from 'redux'
import thunk from 'redux-thunk'

import { reducer as AdminReducer } from './AdminReducer/reducer'
import {reducer as ProductReducer} from "./productReducer/reducer"
const rootReducer = combineReducers({
  AdminReducer,
  ProductReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

