import {
  POSTS_GET,
  POST_GET
} from '../../actions/post_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case POSTS_GET:
      // return newState.push(action.posts);
      return action.posts;
    case POST_GET:
      return newState.push(action.post);
    default:
      return state;
  }
};

export default usersReducer;