import * as LikeAPIUtil from '../util/like_api_util';

export const LIKE_POST = 'LIKE_POST';
export const LIKE_DELETE = 'LIKE_DELETE';


export const likePost = (like) => ({
  type: LIKE_POST,
  like
});

export const likeDelete = (like) => ({
  type: LIKE_DELETE,
  like
});


export const ajaxLikePost = (postId) => dispatch => (
  LikeAPIUtil.ajaxLikePost(postId).then(
    (like) => dispatch(likePost(like))
  )
);

export const ajaxLikeDelete = (postId) => dispatch => (
  LikeAPIUtil.ajaxLikeDelete(postId).then(
    (like) => dispatch(likeDelete(like))
  )
);