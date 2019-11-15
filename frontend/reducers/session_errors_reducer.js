import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';

const sessionErrorsReducers = (state = [], action) => {
    Object.freeze(state);
    let nextState; //= Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            nextState = action.errors;
            return nextState
        case RECEIVE_CURRENT_USER:
            return nextState = []
        default:
            return state;
    }
}

export default sessionErrorsReducers;