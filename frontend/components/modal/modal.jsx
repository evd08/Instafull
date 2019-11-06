import React from 'react';
import LoginFormContainer from '../login/login_container';
import SignupFormContainer from '../signup/signup_container';
import { closeModal } from '../modal/modal_container'

const Modal = ({modal, closeModal}) => {
    if(!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case 'login':
            component = <LoginFormContainer />;
            break;
        case 'signup':
            component = <SignupFormContainer />;
            break;
        default:
            return null;
    }

    return (
        <div onCLick={closeModal}>
            <div onClick={e => e.stopPropagation()}>
                { component }
            </div>
        </div>
    );
}

export default Modal;