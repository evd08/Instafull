import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { 
    RECEIVE_USER, 
    RECEIVE_USERS, 
    RECEIVE_SESSION_ERRORS } from '../actions/users_actions';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState
// debugger
    switch (action.type) {
        case RECEIVE_USERS:
            // debugger
            return action.users;
        // case RECEIVE_USER:
        //     nextState = Object.assign({}, state, { [action.user.id]: action.user } )
        case RECEIVE_CURRENT_USER:
            nextState = Object.assign({}, state, { [action.user.id]: action.user } ) 
            return nextState
        default:
            return state;
    }
}
export default usersReducer;