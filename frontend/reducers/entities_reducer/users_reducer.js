import {
  USER_POST,
  USER_GET
} from '../../actions/user_actions.js';
import {
  SESSION_POST
} from '../../actions/session_actions.js';

const usersReducer = (state = {}, action) => {
  Object.freeze(state)
  let newState = Object.assign({}, state);

  switch (action.type) {
    case USER_POST:
    case USER_GET:
    case SESSION_POST:
      return Object.assign(newState, {
        [action.user.id]: action.user
      });


    default:
      return state;
  }
};

export default usersReducer;