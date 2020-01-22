import React from 'react';
import PostContainer from './post_container'
import Navbar from '../navbar/navbar_container';

class PostIndex extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.followingIds.push(this.props.currentUser.id)
        this.props.fetchPosts(this.props.followingIds);
        this.props.fetchComments();
    }

    render(){

        return(
            <div>
                <Navbar />
                <div className="main-div">
                <ul className="main-ul-div">
                    {this.props.posts.map((post) => (
                        <PostContainer key={post.id} post={post} currentUser={this.props.currentUser.username} />
                    ))
                    }
                </ul>
            </div>
            </div>
           
        )
    }
}

export default PostIndex;