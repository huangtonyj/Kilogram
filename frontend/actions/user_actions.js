import * as UserAPIUtil from '../util/user_api_util.js';

export const USER_POST = 'USER_POST';
export const USER_GET = 'USER_GET';
export const USER_ERROR = 'USER_ERROR';


export const userPost = (user) => ({
  type: USER_POST,
  user
});

export const userGet = (payload) => ({
  type: USER_GET,
  payload
});

export const userError = (error) => ({
  type: USER_ERROR,
  error
});


export const ajaxUserPost = (user) => dispatch => (
  UserAPIUtil.ajaxUserPost(user).then(
    (user) => dispatch(userPost(user)),
    (error) => dispatch(userError(error.responseJSON))
  )
);

export const ajaxUserGet = (id) => dispatch => (
  UserAPIUtil.ajaxUserGet(id).then(
    (payload) => dispatch(userGet(payload))
  )
);