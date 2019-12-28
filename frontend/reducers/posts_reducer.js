import {
    RECEIVE_ALL_POSTS,
    RECEIVE_POST,
    REMOVE_POST
} from '../actions/posts_actions';

const PostsReducer = (state = {}, action) => {
    Object.freeze(state)
    let nextState = Object.assign({}, state)

    switch(action.type) {
        case RECEIVE_ALL_POSTS:
            return action.posts;
        case RECEIVE_POST:
            nextState = Object.assign({}, state, {[action.post.id]: action.post})
            return nextState;
        case REMOVE_POST:
            delete nextState[action.postId]
            return nextState;
        default:
            return state;
    }
}

export default PostsReducer;