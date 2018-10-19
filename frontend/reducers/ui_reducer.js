import {
  combineReducers
} from 'redux';

import modalsReducer from './modals_reducer.js';

const entitiesReducer = combineReducers({
  modal: modalsReducer
});

export default entitiesReducer;