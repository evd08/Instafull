import React from 'react';
import CreatePostFormContainer from '../posts/create_post_form_container'
import PostShowContainer from '../profile/user_post_show_container'
import {Link} from 'react-router-dom';
import PostIndex from '../posts/post_index_container';

class Navbar extends React.Component {
    constructor(props) {
        super(props)

        // this.handleProfileClick = this.handleProfileClick.bind(this);
    }

    // handleProfileClick() {
    //     // return( 
    //         <Link to={`/users`}></Link>
    //     // )
    // }

    render() {
        return (
            <div className="nav-div">
                <div className="nav-logo-div">
                    <a href="/#/" className="nav-logo-div">
                        <img 
                            src="https://img.icons8.com/dusk/64/000000/globe-earth.png" 
                            className="icon" 
                        />
                        <p className="nav-logo-print">Instaplaces</p>
                    </a>
                </div>

                <div className="nav-profile-div">
                    <p className="nav-welcome-print">Welcome {this.props.currentUser.username}</p>
                </div>

                <div className="nav-options-div">
                    <a href="/#/users/upload">
                        <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 24c6.627 0 12-5.373 12-12s-5.373-12-12-12-12 5.373-12 12 5.373 12 12 12zm-2-9h4v1h-4v-1zm0 3v-1h4v1h-4zm2-13l6 6h-4v3h-4v-3h-4l6-6z" /></svg>
                    </a>
                     <a href="/#/users/page">
                        <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c2.757 0 5 2.243 5 5.001 0 2.756-2.243 5-5 5s-5-2.244-5-5c0-2.758 2.243-5.001 5-5.001zm0-2c-3.866 0-7 3.134-7 7.001 0 3.865 3.134 7 7 7s7-3.135 7-7c0-3.867-3.134-7.001-7-7.001zm6.369 13.353c-.497.498-1.057.931-1.658 1.302 2.872 1.874 4.378 5.083 4.972 7.346h-19.387c.572-2.29 2.058-5.503 4.973-7.358-.603-.374-1.162-.811-1.658-1.312-4.258 3.072-5.611 8.506-5.611 10.669h24c0-2.142-1.44-7.557-5.631-10.647z" /></svg>
                    </a>
                    <svg onClick={this.props.logout} className="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16 9v-4l8 7-8 7v-4h-8v-6h8zm-2 10v-.083c-1.178.685-2.542 1.083-4 1.083-4.411 0-8-3.589-8-8s3.589-8 8-8c1.458 0 2.822.398 4 1.083v-2.245c-1.226-.536-2.577-.838-4-.838-5.522 0-10 4.477-10 10s4.478 10 10 10c1.423 0 2.774-.302 4-.838v-2.162z" /></svg>
                </div>
            </div>
        )
    }
}

export default Navbar;