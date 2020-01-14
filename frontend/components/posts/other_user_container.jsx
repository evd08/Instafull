import { connect } from 'react-redux';
import OtherUserShow from './other_user_show';
import { fetchPosts } from '../../actions/posts_actions';
import { fetchComments } from '../../actions/comments_actions';
import { fetchUserByUsername} from '../../actions/users_actions';

const mapStateToProps = (state, ownProps) => {
  // debugger
  let followers;
  let followings; 
// debugger
  if (state.entities.otherUser === true) {
    // debugger
    followers = (Object.values(state.entities.otherUser.follower)).map(({ follower_id }) => follower_id);
    followings = (Object.values(state.entities.otherUser.followed)).map(({ followed_id }) => followed_id);
  }

  return {
    currentUser: state.entities.users[state.session.id],
    username: ownProps.match.params.username,
    posts: Object.values(state.entities.posts),
    otherUser: state.entities.otherUser,

    // if(Object.values(state.entities.otherUser.follower)){
    //   followerIds: (Object.values(state.entities.otherUser.follower)).map(({ follower_id }) => follower_id),
    // }
    followerIds: followers,
    followingIds: followings,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: posts => dispatch(fetchPosts(posts)),
    fetchComments: () => dispatch(fetchComments()),
    fetchUserByUsername: username => dispatch(fetchUserByUsername(username)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OtherUserShow);