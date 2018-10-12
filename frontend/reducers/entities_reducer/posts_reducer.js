import {
  POSTS_GET,
  POST_GET,
  POST_POST
} from '../../actions/post_actions';
import {
  USER_POST,
  USER_GET
} from '../../actions/user_actions.js';

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
    default:
      return state;
  }
};

export default usersReducer;