import {combineReducers, createStore} from 'redux';

import cardReducer from './reducers/cardReducer';

export default createStore(
  combineReducers({
    cardReducer,
  }),
);