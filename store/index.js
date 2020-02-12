import {createStore, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import userReducer from './reducers/user';

const rootReducer = combineReducers({
  user: userReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
