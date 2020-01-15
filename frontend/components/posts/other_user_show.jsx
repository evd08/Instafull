import React, { useEffect } from 'react';
import Navbar from '../navbar/navbar_container';
import { Link } from 'react-router-dom';
import EditProfile from '../profile/edit_profile';

class OtherUserShow extends React.Component {
    constructor(props){
        // debugger
        super(props)

        this.state = {
            // followed: false,
            // btn: '',
            followId: ''
        };
    }

    componentDidMount() {
        this.props.fetchUserByUsername({username: this.props.username})
            .then(() => this.props.fetchPosts(this.props.otherUser.id))
            // .then( document.querySelector('.searchList').style.visibility = "hidden" )
            // debugger
    }

    componentDidUpdate(prevProps, prevState) {
        // debugger
        if(prevProps.match.params.username !== this.props.match.params.username){
            this.props.fetchUserByUsername({ username: this.props.username })
                .then(() => this.props.fetchPosts(this.props.otherUser.id))
        }
    }

    handleClick(set) {
        // debugger
        if (set === 'Edit Profile') {
            document.querySelector('.modal-bg').style.visibility = "visible"
            document.querySelector('.update-user-modal').style.visibility = "visible"
        } 
        else if (set === 'Following') {
            this.props.deleteFollow(this.state.followId)
        } else if (set === 'Follow') {
            this.props.createFollow({followed_id: this.props.otherUser.id})
        }
    }
    
    render() {
        // debugger

        if(!this.props.posts){
            return null;
        }

        let txt
        // if (this.props.currentUser.username === this.props.username && this.state.btn !== 'Edit Profile') {
        if (this.props.currentUser.username === this.props.username) {
            // this.setState({ btn : 'Edit Profile' }) 
            txt = 'Edit Profile'
        } else if (this.props.currentUser.username !== this.props.username) {
            // debugger
            if (this.props.followerIds) {
                // if (this.props.followerIds.includes(this.props.currentUser.id) && this.state.btn !== 'Following'){
                if (this.props.followerIds.includes(this.props.currentUser.id)){
                    this.props.currentUser.followed.map((follow) => {
                        (follow.followed_id === this.props.otherUser.id && this.state.followId !== follow.id) ?
                        this.setState({ followId: follow.id }) : null
                    })
                    // this.setState({ btn: 'Following', followed: true })
                    txt = 'Following'
                    // debugger
                // } else if (!this.props.followerIds.includes(this.props.currentUser.id) && this.state.btn !== 'Follow') {
                } else if (!this.props.followerIds.includes(this.props.currentUser.id)) {
                    // this.setState({ btn: 'Follow', followed: false })
                    txt = 'Follow'
                    // debugger
                }  
            }
        }
         
        const preview = this.props.otherUser.picUrl ? <img className="profile-pic-img" src={this.props.otherUser.picUrl} /> :
            <svg className="profile-pic-img" fill="gray" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z" /></svg>;
       

        // debugger
        return (

            <div className="outer-show-div">

                <Navbar />

                <div className="profile-div">
                    <div className="profile-pic-div">
                        <label htmlFor="file-input">
                            {preview}
                        </label>
                    </div>

                    <div className="profile-details">
                        <div className="profile-username-div">
                            <p className="profile-username-print">{this.props.otherUser.username}</p>
                            {/* <button onClick={() => this.handleClick(this.state.btn)} className="edit-profile-button">{this.state.btn}</button> */}
                            <button onClick={() => this.handleClick(txt)} className="edit-profile-button">{txt}</button>
                        </div>

                        <div className="profile-right-div">
                            <div className="counts">
                                <p><span>{this.props.posts.length}</span> posts</p>
                                <p><span>{this.props.otherUser.followerCount}</span> followers</p>
                                <p><span>{this.props.otherUser.followingCount}</span> following</p>
                            </div>
                            <p className="profile-name">{this.props.otherUser.name}</p>
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
                        <EditProfile currentUser={this.props.currentUser} updateUser={this.props.updateUser} />
                    </div>
                </div>

            </div>
        )
    }
}

export default OtherUserShow;