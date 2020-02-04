import React from 'react';
import Navbar from '../navbar/navbar_container';
import { Link } from 'react-router-dom';
import EditProfile from '../profile/edit_profile';
import Loader from 'react-loader-spinner';

class OtherUserShow extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            btn: this.props.currentUser.username === this.props.username ? 'Edit Profile' : '',
            followerCount: '',
            loading: true,
            currentUser: false,
            set: false,
            photoFile: null,
            picUrl: null,
        };

        this.handleClick = this.handleClick.bind(this);
        this.setUserInfo = this.setUserInfo.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.handleProfilePic = this.handleProfilePic.bind(this);
    }

    componentDidMount() {
        this.props.fetchUserByUsername({ username: this.props.username })
            .then(() => this.props.fetchPosts(this.props.otherUser.id))
            .then(() => this.props.fetchComments())
            .then(() => this.setState({ loading: false }))
        this.setState({ set: false })
    }

    componentDidUpdate(prevProps, prevState) { 
        if(prevProps.match.params.username !== this.props.match.params.username) {
            this.setState({ loading: true })
            this.props.fetchUserByUsername({ username: this.props.username })
                .then(() => { this.props.fetchPosts(this.props.otherUser.id)

                        this.setState({ followerCount: this.props.otherUser.followerCount })
                        this.setState({ loading: false })
            })
        }
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
        window.location.reload(false)
        // this.props.location.reload(false)
            // .then(() => window.location.reload(false))
    }

    handleClick() {
        if (this.state.btn === 'Edit Profile') {
            document.querySelector('.modal-bg').style.visibility = "visible"
            document.querySelector('.update-user-modal').style.visibility = "visible"
        } 
        else if (this.state.btn === 'Following') {
            this.setState({ followerCount: this.state.followerCount-1 })
            this.setState({ btn: "Follow" })
            this.setState({ set: true })
            this.props.deleteFollow({ followed_id: this.props.otherUser.id })
        } else if (this.state.btn === 'Follow') {
            this.setState({ followerCount: this.state.followerCount+1 })
            this.setState({ btn: "Following" })
            this.setState({ set: true })
            this.props.createFollow({followed_id: this.props.otherUser.id})
        }
    }

    setUserInfo() {
        if (this.props.followerIds.includes(this.props.currentUser.id) && this.state.btn !== 'Following'){
            this.setState({ btn: 'Following' })
            this.setState({ followerCount: this.props.otherUser.followerCount })
            this.setState({ currentUser: false })
        } else if (!this.props.followerIds.includes(this.props.currentUser.id) && this.state.btn !== 'Follow') {
            this.setState({ btn: 'Follow' })
            this.setState({ followerCount: this.props.otherUser.followerCount })
            this.setState({ currentUser: false })
        }  
    }

    setCurrentUser() {
        if (this.state.btn !== 'Edit Profile') {
            this.setState({ btn: 'Edit Profile' })
        }
        this.setState({ followerCount: this.props.currentUser.followerCount })
        this.setState({ currentUser: true })
        this.setState({ set: false })
    }
    
    render() {
        // debugger

        let buttonClass = this.state.btn === 'Follow' ? "follow-button" : "edit-profile-button"
       
        if (this.props.currentUser.username === this.props.username && !this.state.currentUser) {
            this.setCurrentUser();
        } else if (this.props.currentUser.username !== this.props.username && !this.state.set) {
            if (this.props.followerIds !== null) {
                this.setUserInfo();
            }
        }

        let clssnme = this.props.currentUser.username === this.props.username ?
            "profile-pic-img" : "other-user-dp"
        
        const preview = this.props.otherUser.picUrl ? <img className={clssnme} src={this.props.otherUser.picUrl} /> :
            <svg className={clssnme} fill="gray" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z" /></svg>;
            
        return this.state.loading ?
            (
                <Loader
                    type="Bars"
                    color="#00BFFF"
                    className="loading"
                />
            ) :
            (
            <div className="outer-show-div">

                <Navbar />

                <div className="profile-div">
                    <div className="profile-pic-div">
                        <label htmlFor="file-input">
                            {preview}
                            {this.props.currentUser.username === this.props.username ?
                            (<input onChange={this.handleFile} type="file" id="file-input" className="hide" />) :
                            (<div></div>)
                            }
                        </label>
                    </div>

                    <div className="profile-details">
                        <div className="profile-username-div">
                            <p className="profile-username-print">{this.props.otherUser.username}</p>
                            <button onClick={this.handleClick} className={buttonClass}>{this.state.btn}</button>
                        </div>

                        <div className="profile-right-div">
                            <div className="counts">
                                <p><span>{this.props.posts.length}</span> posts</p>
                                <p><span>{this.state.followerCount}</span> followers</p>
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