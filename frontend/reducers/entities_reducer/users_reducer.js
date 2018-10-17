import merge from 'lodash/merge';

import {
  USER_POST,
  USER_GET
} from '../../actions/user_actions.js';
import {
  SESSION_POST,
  SESSION_DELETE
} from '../../actions/session_actions.js';
import {
  POSTS_GET,
  POST_GET,
  POST_POST
} from '../../actions/post_actions';


const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {

    case USER_POST:
    case SESSION_POST:
      return merge(newState, {
        [action.user.id]: action.user
      });

    case USER_GET:
      return merge(newState, action.payload.users);
    case POSTS_GET:
      return merge(newState, action.payload.users);

    case SESSION_DELETE:
      return {};

    default:
      return state;
  }
};

export default usersReducer;