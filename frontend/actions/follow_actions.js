import * as FollowAPIUtil from '../util/follow_api_util';

// export const FOLLOW_TOGGLE = 'FOLLOW_TOGGLE';

export const ajaxFollowPost = (followeeId) => dispatch => (
  FollowAPIUtil.ajaxFollowPost(followeeId)
);

export const ajaxFollowDelete = (followeeId) => dispatch => (
  FollowAPIUtil.ajaxFollowDelete(followeeId)
);