import * as PostAPIUtil from '../util/post_api_util';

export const POSTS_GET = 'POSTS_GET';
export const POST_GET = 'POST_GET';
export const POST_POST = 'POST_POST';
export const POST_ERROR = 'POST_ERROR';

// action actions
export const postsGet = (posts) => ({
  type: POSTS_GET,
  posts
});

export const postGet = (post) => ({
  type: POST_GET,
  post
});

export const postPost = (post) => ({
  type: POST_POST,
  post
});

export const postError = (error) => ({
  type: POST_ERROR,
  error
});


// ajax actions
export const ajaxPostsGet = () => dispatch => (
  PostAPIUtil.ajaxPostsGet().then(
    (posts) => dispatch(postsGet(posts))
  )
);

export const ajaxPostGet = (id) => dispatch => (
  PostAPIUtil.ajaxPostGet(id).then(
    (post) => dispatch(postGet(post))
  )
);

export const ajaxPostPost = (post) => dispatch => (
  PostAPIUtil.ajaxPostPost(post).then(
    (post) => dispatch(postPost(post)),
    (error) => dispatch(postError(error.responseJSON))
  )
);