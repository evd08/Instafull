import React from 'react';
import Navbar from '../navbar/navbar_container';
import { Link } from 'react-router-dom';
import EditProfile from './edit_profile';

class UserPostShow extends React.Component {

    constructor(props){

        super(props)
        this.state = {
            photoFile: null,
            picUrl: null
        };

        this.handleProfilePic = this.handleProfilePic.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    componentDidMount() {
        this.props.fetchPosts(this.props.currentUser.id);
        this.props.fetchComments();
    }

    handleFile(e) {
        const file = e.currentTarget.files[0];

            this.setState({
                photoFile: file,
            },
            this.handleProfilePic
            );

    }

    handleProfilePic() {
        const formData = new FormData();
        formData.append('user[pic]', this.state.photoFile);
        formData.append('user[id]', this.props.currentUser.id)
        this.props.updateUser(formData)
            .then(() => window.location.reload(false))
    }

    handleEditProfile() {
        // <EditProfile currentUser={this.props.currentUser}/>
        document.querySelector('.modal-bg').style.visibility = "visible"
        document.querySelector('.update-user-modal').style.visibility = "visible"
    }

    render() {

        const preview = this.props.currentUser.picUrl ? <img className="profile-pic-img" src={this.props.currentUser.picUrl} /> : 
            <svg className="profile-pic-img" fill="gray" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z" /></svg>;

        return(
            <div className="outer-show-div"> 
                <Navbar />

                <div className="profile-div">
                    <div className="profile-pic-div">
                        <label htmlFor="file-input">
                            {preview}
                            <input onChange={this.handleFile} type="file" id="file-input" className="hide" />
                        </label>

                    </div>

                    <div className="profile-details">
                        <div className="profile-username-div">
                            <p className="profile-username-print">{this.props.currentUser.username}</p>
                            <button onClick={this.handleEditProfile} className="edit-profile-button">Edit Profile</button>
                        </div>

                        <div className="profile-right-div">
                            <div className="counts">
                                <p>{this.props.posts.length} Posts</p>
                                <p> Followers</p>
                                <p> Following</p>
                            </div>
                            <p className="profile-name">{this.props.currentUser.name}</p>
                        </div>
                    </div>
                </div>

                <div className="profile-post-div">
                    <ul className="posts-ul">
                        <div className="post-ul-div">
                            {this.props.posts.map((post) => (
                                <li key={post.id}>
                                    <div className="users-post-div">
                                        <Link to={`/posts/${post.id}/edit`}>
                                            <img className="users-post-img" src={post.photoUrl} />
                                        </Link>
                                    </div>
                                </li>
                            ))}
                        </div>
                    </ul>
                </div>

                <div className="modal-bg">
                <div className="update-user-modal">
                    <EditProfile currentUser={this.props.currentUser} updateUser={this.props.updateUser}/>
                </div>
                </div>
            </div>
        )
    }
}

export default UserPostShow;