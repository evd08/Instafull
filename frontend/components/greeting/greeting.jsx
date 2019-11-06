import React from 'react';
import { Link } from 'react-router-dom';

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