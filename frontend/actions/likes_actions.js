import * as LikeAPIUtil from '../util/like_api_util';

const receiveAllLikes = likes => {
    return {
        type: RECEIVE_ALL_LIKES,
        likes
    }
}

const receiveLike = like => {
    return {
        type: RECEIVE_LIKE,
        like
    }
}

const removeLike = likeId => ({
    type: REMOVE_LIKE,
    likeId
})

export const RECEIVE_ALL_LIKES = 'RECEIVE_ALL_LIKES';
export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = 'REMOVE_LIKE';

export const fetchLikes = (postId) => dispatch => {
    return LikeAPIUtil.fetchLikes(postId)
        .then(likes => dispatch(receiveAllLikes(likes)))
}

export const fetchLike = (likeId) => dispatch => {
    return LikeAPIUtil.fetchLike(likeId)
        .then(like => dispatch(receiveLike(like)))
}

export const createLike = like => dispatch => {
    return LikeAPIUtil.createLike(like)
        .then(like => dispatch(receiveLike(like)))
}

export const deleteLike = (likeId) => dispatch => {
    return LikeAPIUtil.deleteLike(likeId)
        .then(like => dispatch(removeLike(like)))
}