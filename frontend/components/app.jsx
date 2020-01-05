import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import PostShowContainer from './profile/user_post_show_container';
import PostIndexContainer from './posts/post_index_container';
import CreatePostContainer from './posts/create_post_form_container';
import EditPostContainer from './posts/edit_post_container';
import SignUpFormContainer from './signup/signup_container';
import LogInFormContainer from './login/login_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => (
    <div>
        <Switch>
            <AuthRoute path="/signup" component={SignUpFormContainer} />
            <AuthRoute path="/login" component={LogInFormContainer} />
            <ProtectedRoute path="/users/page" component={PostShowContainer}/>
            {/* <ProtectedRoute path="/:username" component={PostShowContainer}/> */}
            <ProtectedRoute path="/users/upload" component={CreatePostContainer} />
            <ProtectedRoute path="/posts/:postId/edit" component={EditPostContainer} />
            <ProtectedRoute path="/" component={PostIndexContainer}/>
            <Redirect to="/signup" />
        </Switch>
    </div>
)

export default App;