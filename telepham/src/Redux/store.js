import {applyMiddleware, combineReducers, legacy_createStore} from 'redux'
import thunk from 'redux-thunk'

import { reducer as AdminReducer } from './AdminReducer/reducer'

const rootReducer = combineReducers({
  AdminReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

