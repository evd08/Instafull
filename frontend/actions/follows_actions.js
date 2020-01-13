import * as FollowAPIUtil from '../util/follow_api_util';

const receiveAllFollows = follows => {
  return {
    type: RECEIVE_ALL_FOLLOWS,
    follows
  }
}

const receiveFollow = follow => {
  return {
    type: RECEIVE_FOLLOW,
    follow
  }
}

const removeFollow = followId => ({
  type: REMOVE_FOLLOW,
  followId
})

export const RECEIVE_ALL_FOLLOWS = 'RECEIVE_ALL_FOLLOWS';
export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW";
export const REMOVE_FOLLOW = 'REMOVE_FOLLOW';

export const fetchFollows = postId => dispatch => {
  return FollowAPIUtil.fetchFollows(postId)
    .then(follows => dispatch(receiveAllFollows(follows)))
}

export const fetchFollow = followId => dispatch => {
  return FollowAPIUtil.fetchFollow(followId)
    .then(follow => dispatch(receiveFollow(follow)))
}

export const createFollow = follow => dispatch => {
  return FollowAPIUtil.createFollow(follow)
    .then(follow => dispatch(receiveFollow(follow)))
}

export const deleteFollow = followId => dispatch => {
  return FollowAPIUtil.deleteFollow(followId)
    .then(follow => dispatch(removeFollow(follow)))
}