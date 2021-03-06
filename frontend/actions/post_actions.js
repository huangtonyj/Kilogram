import * as PostAPIUtil from '../util/post_api_util';

export const POSTS_GET = 'POSTS_GET';
export const POST_GET = 'POST_GET';
export const POST_POST = 'POST_POST';
export const POST_ERROR = 'POST_ERROR';

// action actions
export const postsGet = (payload) => ({
  type: POSTS_GET,
  payload
});

export const postGet = (payload) => ({
  type: POST_GET,
  payload
});

export const postPost = (payload) => ({
  type: POST_POST,
  payload
});

export const postError = (error) => ({
  type: POST_ERROR,
  error
});


// ajax actions
export const ajaxPostsGet = () => dispatch => (
  PostAPIUtil.ajaxPostsGet().then(
    (payload) => dispatch(postsGet(payload))
  )
);

export const ajaxPostGet = (id) => dispatch => (
  PostAPIUtil.ajaxPostGet(id).then(
    (payload) => dispatch(postGet(payload))
  )
);

export const ajaxPostPost = (post) => dispatch => (
  PostAPIUtil.ajaxPostPost(post).then(
    (post) => dispatch(postPost(post)),
    (error) => dispatch(postError(error.responseJSON))
  )
);