import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import PostShowContainer from './posts/user_post_show_container'
import MainContainer from './main/main_container'
// import NavbarContainer from './navbar/navbar_container'
import CreatePostContainer from './posts/create_post_form_container'
import EditPostContainer from './posts/edit_post_container'
// import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './signup/signup_container'
import LogInFormContainer from './login/login_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from '../components/modal/modal';


const App = () => (
    <div>
        {/* <Modal /> */}
        {/* <header> */}
            {/* <h1>Insta</h1> */}
            {/* <GreetingContainer /> */}
        {/* </header> */}

        {/* <NavbarContainer /> */}

        <Switch>
            <AuthRoute path="/signup" component={SignUpFormContainer} />
            <AuthRoute path="/login" component={LogInFormContainer} />
            {/* <ProtectedRoute path={`/users/${userId}`} component={PostShowContainer} /> */}
            <ProtectedRoute path="/users/page" component={PostShowContainer}/>
            <ProtectedRoute path="/users/upload" component={CreatePostContainer} />
            <ProtectedRoute path="/posts/:postId/edit" component={EditPostContainer} />
            {/* <ProtectedRoute path="/users/profile" component={} /> */}
            <ProtectedRoute path="/" component={MainContainer}/>
            <Redirect to="/signup" />
        </Switch>
    </div>
)

export default App;