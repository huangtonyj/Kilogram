import {
  SESSION_ERROR,
  SESSION_POST,
  SESSION_DELETE
} from '../actions/session_actions.js';
import {
  USER_POST,
  USER_ERROR
} from '../actions/user_actions.js';
import {
  POST_ERROR,
  POST_POST
} from '../actions/post_actions';

const errorsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {

    // errors for session/user
    case SESSION_ERROR:
      newState = {
        session: action.error
      };
      return newState;

    case USER_ERROR:
      newState = {
        user: action.error
      };
      return newState;


    case SESSION_POST:
    case SESSION_DELETE:
    case USER_POST:
      newState.session = [];
      newState.post = [];
      return newState;

      // errors for posts
    case POST_ERROR:
      Object.assign(newState, {
        post: action.error
      });
      return newState;
    case POST_POST:
      newState.post = [];
      return newState;
    default:
      return state;

  }
};

export default errorsReducer;