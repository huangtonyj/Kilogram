import * as PostAPIUtil from '../util/post_api_util';

export const POSTS_GET = 'POSTS_GET';
export const POST_GET = 'POST_GET';


export const postsGet = (posts) => ({
  type: POSTS_GET,
  posts
});

export const postGet = (post) => ({
  type: POST_GET,
  post
});


export const ajaxPostsGet = () => dispatch => (
  PostAPIUtil.ajaxPostsGet().then(
    (posts) => dispatch(postsGet(posts))
  )
);

export const ajaxPostGet = (id) => dispatch => (
  PostAPIUtil.ajaxPostsGet(id).then(
    (post) => dispatch(postGet(post))
  )
);

window.ajaxPostsGet = ajaxPostsGet;
window.ajaxPostGet = ajaxPostGet;