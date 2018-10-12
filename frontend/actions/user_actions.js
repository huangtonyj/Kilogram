import * as UserAPIUtil from '../util/user_api_util.js';

export const USER_POST = 'USER_POST';
export const USER_GET = 'USER_GET';


export const userPost = (user) => ({
  type: USER_POST,
  user
});

export const userGet = (payload) => ({
  type: USER_GET,
  payload
});


export const ajaxUserPost = (user) => dispatch => (
  UserAPIUtil.ajaxUserPost(user).then(
    (user) => dispatch(userPost(user))
  )
);

export const ajaxUserGet = (id) => dispatch => (
  UserAPIUtil.ajaxUserGet(id).then(
    (payload) => dispatch(userGet(payload))
  )
);