import React from 'react';
import PostContainer from './post_container';
import Navbar from '../navbar/navbar_container';
import Loader from 'react-loader-spinner';

class PostIndex extends React.Component {
    constructor(props){
        super(props)

        this.state = { loading: true }
    }

    componentDidMount() {
      this.props.fetchFollows(this.props.currentUser.id)
        .then((res) => {
          let ids = res.follows.followed.map(({ followed_id }) => followed_id)
          ids.push(this.props.currentUser.id)
          this.props.fetchPosts(ids)
        })
        .then(() => {
          this.props.fetchComments()
          this.setState({ loading: false })
        })
    }

    render(){
        return this.state.loading ? (
          <Loader
            type="Bars"
            color="#00BFFF"
            className="loading"
          />
        ) : (
          <div>
            <Navbar />
            <div className="main-div">
              <ul className="main-ul-div">
                {this.props.posts.map(post => (
                  <PostContainer
                    key={post.id}
                    post={post}
                    currentUser={this.props.currentUser.username}
                  />
                ))}
              </ul>
            </div>
          </div>
        );
    }
}

export default PostIndex;