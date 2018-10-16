import * as SessionAPIUtil from '../util/session_api_util.js';

export const SESSION_POST = 'SESSION_POST';
export const SESSION_DELETE = 'SESSION_DELETE';
export const SESSION_ERROR = 'SESSION_ERROR';


export const sessionPost = (user) => ({
  type: SESSION_POST,
  user
});

export const sessionDelete = () => ({
  type: SESSION_DELETE,
});

export const sessionError = (error) => ({
  type: SESSION_ERROR,
  error
});


export const ajaxSessionPost = (user) => dispatch => (
  SessionAPIUtil.ajaxSessionPost(user).then(
    (user) => dispatch(sessionPost(user)),
    (error) => dispatch(sessionError(error.responseJSON))
  ).then(
    (user) => console.log(user)
  )
);

export const ajaxSessionDelete = () => dispatch => (
  SessionAPIUtil.ajaxSessionDelete().then(
    () => dispatch(sessionDelete()),
    (error) => dispatch(sessionError(error.responseJSON))
  )
);