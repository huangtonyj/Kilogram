import {
  combineReducers
} from 'redux';

import usersReducer from './entities_reducer/users_reducer.js';
import postsReducer from './entities_reducer/posts_reducer.js';
import commentsReducer from './entities_reducer/comments_reducer.js';

const entitiesReducer = combineReducers({
  users: usersReducer,
  posts: postsReducer,
  comments: commentsReducer
});

export default entitiesReducer;