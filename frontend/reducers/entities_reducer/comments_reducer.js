import merge from 'lodash/merge';

import {
  SESSION_POST,
  SESSION_DELETE,
} from '../../actions/session_actions.js';
import {
  POSTS_GET,
  POST_GET,
  POST_POST
} from '../../actions/post_actions';


const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {

    case POSTS_GET:
      return Object.assign(newState, action.payload.comments);

    case SESSION_DELETE:
      return {};

    default:
      return state;
  }
};

export default commentsReducer;