import React from 'react';
import { Link } from 'react-router-dom';
import SignUpForm from '../signup/signup_container';

const Greeting = ({ currentUser, logout }) => {
    let display = currentUser ?
        (
            <div>
                <h1>Welcome {currentUser.username}</h1>
                <button onClick={logout}>Logout</button> {/* logout comes from container mDTP */}
            </div>
        ) :
        (
            <div>
                {/* <SignUpForm /> */}

                <Link to="/signup" className="auth-button">Sign Up</Link>
                <br/>
                <Link to="/login" className="login-link">Log In</Link>
            </div>
        )

    return (
        <div>
            {display}
        </div>
    )
}

export default Greeting;