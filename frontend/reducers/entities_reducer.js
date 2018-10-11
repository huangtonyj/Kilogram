import {
  combineReducers
} from 'redux';

import usersReducer from './entities_reducer/users_reducer.js';
import postsReducer from './entities_reducer/posts_reducer.js';

const entitiesReducer = combineReducers({
  users: usersReducer,
  posts: postsReducer
});

export default entitiesReducer;