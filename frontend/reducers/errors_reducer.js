import {
  SESSION_ERROR,
  SESSION_POST,
  SESSION_DELETE
} from '../actions/session_actions.js';
import {
  USER_POST,
} from '../actions/user_actions.js';

const errorsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {

    case SESSION_ERROR:
      // let sessionErrors = state.errors.session;
      // sessionErrors.push(action.error);
      // newState.errors.session = sessionErrors;
      newState = {
        session: action.error
      };
      return newState;

    case SESSION_POST:
    case SESSION_DELETE:
    case USER_POST:
      newState.session = [];
      return newState;

    default:
      return state;

  }
};

export default errorsReducer;