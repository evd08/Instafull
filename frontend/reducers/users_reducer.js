import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState

    switch (action.type) {
        case (RECEIVE_CURRENT_USER):
            nextState = Object.assign({}, state, { [action.user.id]: action.user })
            return nextState
        default:
            return state;
    }
}
export default usersReducer;