import React from 'react';
import PostContainer from './post_container';
import Navbar from '../navbar/navbar_container';
import Loader from 'react-loader-spinner';
import InfiniteScroll from 'react-infinite-scroll-component';

class PostIndex extends React.Component {
  constructor(props){
      super(props)

      this.state = { 
        loading: true,
        page: 1,
        morePosts: true
      }

      this.fetchMorePosts = this.fetchMorePosts.bind(this);
  }

  componentDidMount() {
    this.props.fetchFollows(this.props.currentUser.id)
      .then((res) => {
        let ids = res.follows.followed.map(({ followed_id }) => followed_id)
        ids.push(this.props.currentUser.id)
        this.props.fetchPosts(ids, this.state.page)
      })
      .then(() => {
        this.props.fetchComments()
        this.setState({ loading: false })
      })
  }

  fetchMorePosts() {
    this.props.fetchFollows(this.props.currentUser.id)
      .then((res) => {
        let ids = res.follows.followed.map(({ followed_id }) => followed_id)
        ids.push(this.props.currentUser.id)
        console.log("THIS IS THE STATE PAGE", this.state.page)
        this.props.fetchPosts(ids, this.state.page + 1)
          .then(res => {
            // console.log("THIS IS THE LENGTH", Object.values(res.posts).length-1)
            // console.log("THIS IS THE PAGE NUMBER(max: 7):", this.state.page)
            if (Object.values(res.posts).length - 1 === this.props.total) {
              this.setState({ morePosts: false })
            }
          })
        this.setState({ page: this.state.page + 1 })
      })
      .then(() => {
        this.props.fetchComments()
        this.setState({ loading: false })
      })
  }

  render(){
    // debugger
      return this.state.loading ? (
        <Loader type="Bars" color="#00BFFF" className="loading" />
      ) : (
        <div>
          <Navbar />
          <div className="main-div">
            <ul className="main-ul-div">
              <InfiniteScroll 
                dataLength={this.props.posts.length}
                next={this.fetchMorePosts}
                hasMore={this.state.morePosts}
                loader={<Loader type="ThreeDots" color="#00BFFF" className="loading-more" />}
                endMessage={<h1>No more posts</h1>}
              >
                {this.props.posts.map((post) => (
                  <PostContainer
                    key={post.id}
                    post={post}
                    currentUser={this.props.currentUser.username}
                  />
                ))}
              </InfiniteScroll>
            </ul>
          </div>
        </div>
      );
  }
}

export default PostIndex;