import React from 'react';
import LoginFormContainer from '../login/login_container';
import SignupFormContainer from '../signup/signup_container';
import {connect} from 'react-redux';
// import ProfilePic from '../posts/profile_pic';
import { closeModal } from '../../actions/modal_actions';

const Modal = ({modal, closeModal}) => {
    if(!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case 'pic':
            // component = <ProfilePic />;
            break;
        // case 'signup':
        //     component = <SignupFormContainer />;
        //     break;
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


const mapStateToProps = state => {
    return {
        modal: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);