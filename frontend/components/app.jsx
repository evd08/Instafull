import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import PostShowContainer from './posts/user_post_show_container'
import NavbarContainer from './navbar/navbar_container'
import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './signup/signup_container'
import LogInFormContainer from './login/login_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => (
    <div>
        <header>
            {/* <h1>Insta</h1> */}
            {/* <GreetingContainer /> */}
        </header>

        {/* <NavbarContainer /> */}

        <Switch>
            <AuthRoute path="/signup" component={SignUpFormContainer} />
            <AuthRoute path="/login" component={LogInFormContainer} />
            <ProtectedRoute path="/users/page" component={PostShowContainer}/>
            <ProtectedRoute path="/" component={NavbarContainer}/>
            <Redirect to="/signup" />
        </Switch>
    </div>
)

export default App;