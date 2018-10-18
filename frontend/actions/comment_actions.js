import * as CommentAPIUtil from '../util/comment_api_util';

export const COMMENT_POST = 'COMMENT_POST';
export const COMMENT_DELETE = 'COMMENT_DELETE';
export const COMMENT_PATCH = 'COMMENT_PATCH';


export const commentPost = (payload) => ({
  type: COMMENT_POST,
  payload
});

// export const likeDelete = (like) => ({
//   type: LIKE_DELETE,
//   like
// });

// export const likePatch = (like) => ({
//   type: LIKE_DELETE,
//   like
// });


export const ajaxCommentPost = (comment) => dispatch => (
  CommentAPIUtil.ajaxCommentPost(comment).then(
    (payload) => dispatch(commentPost(payload))
  )
);

// export const ajaxLikeDelete = (postId) => dispatch => (
//   LikeAPIUtil.ajaxLikeDelete(postId).then(
//     (like) => dispatch(likeDelete(like))
//   )
// );

// export const ajaxLikePatch = (postId) => dispatch => (
//   LikeAPIUtil.ajaxLikeDelete(postId).then(
//     (like) => dispatch(likeDelete(like))
//   )
// );