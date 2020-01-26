import {
  RECEIVE_ALL_FOLLOWS,
  RECEIVE_FOLLOW,
  REMOVE_FOLLOW
} from '../actions/follows_actions';

const followsReducer = (state = {}, action) => {
  Object.freeze(state)
  let nextState = Object.assign({}, state)

  switch (action.type) {
    case RECEIVE_ALL_FOLLOWS:
      return action.follows;
    case RECEIVE_FOLLOW:
      nextState = Object.assign({}, state, { [action.follow.id]: action.follow })
      return nextState;
    case REMOVE_FOLLOW:
      debugger
      delete nextState[action.followId]
      return nextState;
    default:
      return state;
  }
}

export default followsReducer;