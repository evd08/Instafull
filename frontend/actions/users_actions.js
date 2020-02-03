import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';
export const SEARCH_USERS ='SEARCH_USERS';

const receiveUsers = (users) => {
    return {
        type: RECEIVE_USERS,
        users
    };
};

const receiveUser = (user) => {
    return {
        type: RECEIVE_USER,
        user
    };
};

const receiveErrors = (errors) => ({
    type: RECEIVE_USER_ERRORS,
    errors
});

const receiveResult = (users) => {
    return {
        type: SEARCH_USERS,
        users
    }
}



export const fetchUsers = () => (dispatch) => {
    return UserApiUtil.fetchUsers()
        .then((users) => dispatch(receiveUsers(users)))
};

export const fetchUserByUsername = (username) => (dispatch) => {
    return UserApiUtil.fetchUserByUsername(username)
        .then((user) => dispatch(receiveUser(user)),
        errors => dispatch(receiveErrors(errors.responseJSON)))
}

export const fetchUser = (userId) => (dispatch) => {
    return UserApiUtil.fetchUser(userId)
        .then((user) => dispatch(receiveUser(user)))
};

export const updateUser = (user) => (dispatch) => {
    return UserApiUtil.updateUser(user)
        .then(
            user => dispatch(receiveUser(user)),
            err => dispatch(receiveErrors(err.responseJSON)))
};

export const fetchSearch = (username) => (dispatch => {
    return UserApiUtil.fetchSearch(username)
        .then(
            users => dispatch(receiveResult(users)),
            err => dispatch(receiveErrors(err.responseJSON))
        )
})