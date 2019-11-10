import React from 'react';

class PostIndex extends React.Component {
    constructor(props){
        super(props)
        // debugger
    }

    componentDidMount() {
        // debugger
        this.props.fetchPosts();
        // this.props.fetchUser(); //what user id?
    }

    render(){
        // debugger
        return(
            <div className="main-div">
                <ul className="main-ul-div">
                    {this.props.posts.map((post, i) => (
                        <li className="main-li">
                            <div>
                                <div className="main-post-header">
                                    <a className="post-user-button" href="/#/users/page">{post.user_id}</a>
                                    <a className="option-button" href="">...</a>
                                </div>
                                <img className="main-posts" src={post.photoUrl} />
                                <br/>
                                <div>
                                    <p className="comment-text">{post.caption}</p>
                                </div>
                            </div>
                        </li>
                    ))
                    }
                </ul>
            </div>
        )
    }
}

export default PostIndex;