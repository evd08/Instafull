import * as CommentAPIUtil from '../util/comment_api_util';

const receiveAllComments = comments => ({
  type: RECEIVE_ALL_COMMENTS,
  comments
})

const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
})

const removeComment = commentId => ({
  type: REMOVE_COMMENT,
  commentId
})

export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

export const fetchComments = postId => dispatch => {
  return CommentAPIUtil.fetchComments(postId)
    .then(comments => dispatch(receiveAllComments(comments)))
}

export const fetchComment = commentId => dispatch => {
  return CommentAPIUtil.fetchComment(commentId)
    .then(comment => dispatch(receiveComment(comment)))
}

export const createComment = comment => dispatch => {
  return CommentAPIUtil.createComment(comment)
    .then(comment => dispatch(receiveComment(comment)))
}

export const deleteComment = commentId => dispatch => {
  debugger;
  return CommentAPIUtil.deleteComment(commentId)
    .then(() => dispatch(removeComment(commentId)))
}