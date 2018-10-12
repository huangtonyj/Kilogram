import * as FollowAPIUtil from '../util/follow_api_util';

export const FOLLOW_TOGGLE = 'FOLLOW_TOGGLE';

export const ajaxFollowPostToggle = (followeeId) => dispatch => (
  FollowAPIUtil.ajaxFollowPostToggle(followeeId)
);