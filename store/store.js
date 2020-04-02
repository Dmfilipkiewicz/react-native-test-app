import {combineReducers, createStore} from 'redux';

import cardReducer from './reducers/CardReducer';

export default createStore(
  combineReducers({
    cardReducer,
  }),
);