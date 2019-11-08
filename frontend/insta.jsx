import React from 'react';
import ReactDOM from 'react-dom';
import { login, signup, logout } from './actions/session_actions'
import configureStore from './store/store';
import Root from './components/root'

document.addEventListener('DOMContentLoaded', () => {
    let root = document.getElementById('root')
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.login = login 
    window.signup = signup 
    window.logout = logout
    // console.log("working")

    ReactDOM.render(<Root store={store} />, root)
})