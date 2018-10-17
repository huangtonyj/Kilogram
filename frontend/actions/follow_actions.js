import * as FollowAPIUtil from '../util/follow_api_util';

export const FOLLOW_POST = 'FOLLOW_POST';
export const FOLLOW_DELETE = 'FOLLOW_DELETE';


export const followPost = (follow) => ({
  type: FOLLOW_POST,
  follow
});

export const followDelete = (follow) => ({
  type: FOLLOW_DELETE,
  follow
});


export const ajaxFollowPost = (followeeId) => dispatch => (
  FollowAPIUtil.ajaxFollowPost(followeeId).then(
    (follow) => dispatch(followPost(follow))
  )
);

export const ajaxFollowDelete = (followeeId) => dispatch => (
  FollowAPIUtil.ajaxFollowDelete(followeeId).then(
    (follow) => dispatch(followDelete(follow))
  )
);