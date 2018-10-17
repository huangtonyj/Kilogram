import {
  POSTS_GET,
  POST_GET,
  POST_POST
} from '../../actions/post_actions';
import {
  USER_POST,
  USER_GET
} from '../../actions/user_actions.js';
import {
  SESSION_POST,
  SESSION_DELETE,
} from '../../actions/session_actions.js';
import {
  LIKE_POST,
  LIKE_DELETE
} from '../../actions/like_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {

    case POSTS_GET:
    case USER_GET:
      return Object.assign(newState, action.payload.posts);

    case POST_GET:
    case POST_POST:
      return Object.assign(action.payload.posts, newState);

    case LIKE_POST:
      newState[action.like.post_id].likers[action.like.user_id] = "true";
      return newState;

    case LIKE_DELETE:
      newState[action.like.post_id].likers[action.like.user_id] = "false";
      return newState;

    case SESSION_DELETE:
      return {};

    default:
      return state;
  }
};

export default usersReducer;