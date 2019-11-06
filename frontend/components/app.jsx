import React from 'react';
import { Route } from 'react-router-dom'
import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './signup/signup_container'
import LogInFormContainer from './login/login_container'
import { AuthRoute } from '../util/route_util';

const App = () => (
    <div>
        <header>
            <h1>Insta</h1>
            <GreetingContainer />
        </header>
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            <AuthRoute exact path="/login" component={LogInFormContainer} />

    </div>
)

export default App;