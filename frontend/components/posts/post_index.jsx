import React from 'react';
import PostContainer from './post_container'

class PostIndex extends React.Component {
    constructor(props){
        super(props)
        // debugger
    }

    componentDidMount() {
        this.props.fetchPosts(this.props.currentUserId);
    }

    render(){
        // debugger

        return(
            <div className="main-div">
                <ul className="main-ul-div">
                    {this.props.posts.map((post) => (
                        <PostContainer key={post.id} post={post} currentUser={this.props.currentUser} />
                    ))
                    }
                </ul>
            </div>
        )
    }
}

export default PostIndex;