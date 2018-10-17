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
import {
  FOLLOW_POST,
  FOLLOW_DELETE
} from '../../actions/follow_actions';


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

    case FOLLOW_POST:
      newState[action.follow.follower_id].followees[action.follow.followee_id] = true;
      newState[action.follow.followee_id].followers[action.follow.follower_id] = true;
      return newState;

    case FOLLOW_DELETE:
      newState[action.follow.follower_id].followees[action.follow.followee_id] = false;
      newState[action.follow.followee_id].followers[action.follow.follower_id] = false;
      return newState;

    default:
      return state;
  }
};

export default usersReducer;