import {
  SESSION_POST,
  SESSION_DELETE,
} from '../actions/session_actions.js';
import {
  USER_POST,
} from '../actions/user_actions.js';

const _nullUser = Object.freeze({
  id: null
});

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);

  switch (action.type) {
    case SESSION_POST:
    case USER_POST:
      return {
        id: action.user.id
      };

    case SESSION_DELETE:
      return _nullUser;
    default:
      return state;
  }
};

export default sessionReducer;