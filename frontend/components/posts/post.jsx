import React from 'react';
import { Link } from 'react-router-dom';

class Post extends React.Component {

    constructor(props){
        
        super(props)
        this.state = {
            liked: false
        }
        // debugger
        this.toggleLike = this.toggleLike.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchLikes()
    }

    handleSubmit() {
        // this.state.liked ?
        this.props.post.likeId ?
            this.props.deleteLike(this.props.post.likeId).then(() => window.location.reload(false)) :
            this.props.createLike(this.props.like).then(() => window.location.reload(false));
    }

    toggleLike(e) {
        e.preventDefault();
        this.setState( {liked: !this.state.liked}, this.handleSubmit )
    }

    render() {

        let likeButton = this.props.post.likeId ?
            <svg className="like-button" fill="red" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.419c-2.826-5.695-11.999-4.064-11.999 3.27 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-7.327-9.17-8.972-12-3.27z" /></svg>
            : <svg className="like-button" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17.516 3c2.382 0 4.487 1.564 4.487 4.712 0 4.963-6.528 8.297-10.003 11.935-3.475-3.638-10.002-6.971-10.002-11.934 0-3.055 2.008-4.713 4.487-4.713 3.18 0 4.846 3.644 5.515 5.312.667-1.666 2.333-5.312 5.516-5.312zm0-2c-2.174 0-4.346 1.062-5.516 3.419-1.17-2.357-3.342-3.419-5.515-3.419-3.403 0-6.484 2.39-6.484 6.689 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-4.586-3.414-6.689-6.484-6.689z" /></svg>

        let like = this.props.post.countLikes < 2 ? "like" : "likes";

        return(
            <li className="main-li">
                <div>
            
                    <div className="main-post-header">
                        <div className="user">
                            <div className="mini-profile-pic-div">
                                <img className="mini-profile-pic" src={this.props.currentUser.picUrl}/>
                            </div>
                            <Link className="post-user-button" to="/users/page">{this.props.post.username}</Link>
                        </div>
                        <button className="option-button">...</button>
                    </div>

                    <img className="main-posts" src={this.props.post.photoUrl} />
                    <br />

                    <div className="below-post-div">
                        <div className="like-comment-div">
                            <button className="option-button" onClick={this.toggleLike}>
                                {likeButton}
                            </button>
                        </div>

                        <div className="count-likes">
                            <p>{this.props.post.countLikes} {like}</p>
                        </div>

                        <div className="main-post-caption-div">
                            <p className="comment-text">
                                <Link className="option-button" to={`/users/${this.props.post.user_id}`}>{this.props.post.username}</Link>
                                {this.props.post.caption}
                            </p>
                        </div>
                    </div>

                </div>
            </li>
        )
    }
}

export default Post;