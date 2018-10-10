import {
  SESSION_ERROR,
  SESSION_POST,
} from '../actions/session_actions.js';

const errorsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {

    case SESSION_ERROR:
      let sessionErrors = state.errors.session;
      sessionErrors.push(action.error);
      newState.session = sessionErrors;
      return newState;

    case SESSION_POST:
      newState.session = [];
      return newState;

    default:
      return state;

  }
};

export default errorsReducer;