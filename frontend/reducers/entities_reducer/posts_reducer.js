import {
  POSTS_GET,
  POST_GET,
  POST_POST
} from '../../actions/post_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case POSTS_GET:
      return Object.assign(newState, action.payload.posts);
    case POST_GET:
    case POST_POST:
      return Object.assign(action.payload.posts, newState);
    default:
      return state;
  }
};

export default usersReducer;