import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from 'react-loader-spinner';

export default function ThreeColumnPosts(posts, fetchMorePosts) {
  const [morePosts, setMorePosts] = useState(true);

  return (
    <section>
      <InfiniteScroll
        dataLength={this.props.posts.length}
        next={this.fetchMorePosts}
        hasMore={this.state.morePosts}
        loader={
          <Loader type="ThreeDots" color="#00BFFF" className="loading-more" />
        }
        endMessage={<h1>No more posts</h1>}
      >
        {
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
        }
      </InfiniteScroll>
    </section>
  );
}