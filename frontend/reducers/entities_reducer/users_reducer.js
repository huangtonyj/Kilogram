import {
  USER_POST,
  USER_GET
} from '../../actions/user_actions.js';
import {
  SESSION_POST
} from '../../actions/session_actions.js';
import {
  POSTS_GET,
  POST_GET,
  POST_POST
} from '../../actions/post_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case USER_POST:
    case SESSION_POST:
      return Object.assign(newState, {
        [action.user.id]: action.user
      });
    case USER_GET:
      return Object.assign(newState, action.payload.users);
    case POSTS_GET:
      return Object.assign(newState, action.payload.users);


    default:
      return state;
  }
};

export default usersReducer;