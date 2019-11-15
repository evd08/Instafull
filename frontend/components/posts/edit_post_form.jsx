import React from 'react';
import Navbar from '../navbar/navbar_container'

class EditPostForm extends React.Component {
    constructor(props){
        super(props)

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        e.preventDefault();
        this.props.deletePost(this.props.post.id);
    }

    componentDidMount() {
        this.props.fetchPost(this.props.post.id);
    }

    render() {
        return (
            <div className="outer-show-div">
                <Navbar />
                <div className="edit-main-div">

                    <div className="edit-post-div">

                        <div className="edit-post-img-div">
                            <img className="edit-post-img" src={this.props.post.photoUrl} alt=""/>
                        </div>

                        <div className="edit-div">
                            <div className="edit-username-div">
                                {/* profile pic */}
                                    <div className="user">
                                        <div className="mini-profile-pic-div">
                                            <img className="mini-profile-pic" src={this.props.currentUser.picUrl} />
                                        </div>
                                        <p className="post-user-button">{this.props.currentUser.username}</p>
                                    </div>
                                <div>
                                    <button 
                                        className="edit-profile-button"
                                        onClick={this.handleClick}
                                    >
                                        Delete Post
                                    </button>
                                </div>
                            </div>

                            <div className="edit-post-list">

                                <div className="edit-page-caption">
                                    <div className="option-button">
                                        <a className="edit-username" href="/#/users/page">{this.props.currentUser.username}</a>
                                    </div>
                                    <div className="comment-text">{this.props.post.caption}</div>
                                </div>
                                
                                <ul>
                                    <li>
                                        
                                    </li>
                                </ul>

                            </div>
 
                            {/* list of comments */}

                            <div className="add-comment-div">
                                <textarea placeholder="Add a comment..." className="add-comment"></textarea>
                                <button className="option-button">Post</button>                          
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default EditPostForm;