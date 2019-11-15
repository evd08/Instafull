import * as PostAPIUtil from '../util/post_api_util';
import { fetchUser } from '../util/user_api_util';


const receiveAllPosts = posts => {
    // debugger
    return {
        type: RECEIVE_ALL_POSTS,
        posts 
    }
}

const receivePost = post => ({
    type: RECEIVE_POST,
    post
})

const removePost = postId => ({
    type: REMOVE_POST,
    postId
})

export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST = 'REMOVE_POST';

export const fetchPosts = (userId) => dispatch => {
    // debugger
    return PostAPIUtil.fetchPosts(userId)
        .then(posts => dispatch(receiveAllPosts(posts)))
}

export const fetchPost = postId => dispatch => {
    return PostAPIUtil.fetchPost(postId)
        .then(post => dispatch(receivePost(post)))
}

export const createPost = post => dispatch => {
    return PostAPIUtil.createPost(post)
        .then(post => dispatch(receivePost(post)))
}

export const updatePost = post => dispatch => {
    return PostAPIUtil.updatePost(post)
        .then(post => dispatch(receivePost(post)))
}

export const deletePost = postId => dispatch => {
    return PostAPIUtil.deletePost(postId)
        .then(() => dispatch(removePost(postId)))
}