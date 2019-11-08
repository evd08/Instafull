import React from 'react';
import CreatePostFormContainer from '../posts/create_post_form_container'
import PostShowContainer from '../posts/user_post_show_container'
import {Link} from 'react-router-dom';

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
                        <p className="nav-logo-print">Instagram</p>
                    </a>
                </div>

                <div className="nav-profile-div">
                    {/* <img src="" alt=""/> */}
                    <p className="nav-logo-print">Welcome {this.props.currentUser.username}</p>
                </div>

                <div className="nav-options-div">
                     <a href="/#/users/page">
                        <img 
                            src="https://img.icons8.com/ultraviolet/40/000000/gender-neutral-user.png"
                            className="icon" 
                            // onClick={this.handleProfileClick}
                        />
                    </a>
                    <img 
                        src="https://img.icons8.com/cute-clipart/64/000000/exit.png" 
                        className="icon"
                        onClick={this.props.logout}
                    />
                </div>
            </div>
        )
    }
}

export default Navbar;