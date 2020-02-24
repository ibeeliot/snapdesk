/**
 * ************************************
 *
 * @module  index.js
 * @author
 * @date 2/21/20
 * @description simply a place to combine reducers
 *
 * ************************************
 */

import { combineReducers } from 'redux';

// import all reducers here
import ticketsReducer from './ticketsReducer';
import userReducer from './userReducer';

// combine reducers
const reducers = combineReducers({
  // if we had other reducers, they would go here
  tickets: ticketsReducer,
  user: userReducer,
});

// make the combined reducers available for import
export default reducers;
