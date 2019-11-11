import React from 'react'
import Navbar from '../navbar/navbar_container'

class UserPostShow extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return(
            <div className="outer-show-div"> 
                <Navbar />

                <div className="profile-div">
                    <div className="profile-pic-div">
                        {/* img profile pic */}
                        <img className="profile-pic-img" src={window.profilePic} />
                    </div>

                    <div className="profile-details">
                        <div className="profile-username-div">
                            <p className="profile-username-print">{this.props.currentUser.username}</p>
                            <button className="edit-profile-button">Edit Profile</button>
                        </div>

                        <div className="profile-right-div">
                            <p>number of posts, followers, following</p>
                            <p className="profile-name">{this.props.currentUser.name}</p>
                        </div>
                    </div>
                </div>

                <div className="profile-post-div">
                    {/* posts */}
                    <ul className="posts-ul">
                        {this.props.posts.map(post => (
                            <li>
                                <div className="users-post-div">
                                    <img className="users-post-img" src={post.photoUrl} />
                                </div>
                            </li>
                        ))}
                        <li>
                            {}
                        </li>
                    </ul>
                </div>
                
            </div>
        )
    }
}

export default UserPostShow;