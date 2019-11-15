import {
    RECEIVE_ALL_LIKES,
    RECEIVE_LIKE,
    REMOVE_LIKE
} from '../actions/likes_actions';

const likesReducer = (state = {}, action) => {
    // debugger
    Object.freeze(state)
    let nextState = Object.assign({}, state)

    switch(action.type) {
        case RECEIVE_ALL_LIKES:
            // debugger
            return action.likes;
        case RECEIVE_LIKE:
            nextState = Object.assign({}, state, {[action.like.id]: action.like})
            return nextState;
        case REMOVE_LIKE:
            delete nextState[action.likeId]
            return nextState;
        default:
            return state;
    }
}

export default likesReducer;