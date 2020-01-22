import { connect } from 'react-redux';
import OtherUserShow from './other_user_show';
import { fetchPosts, fetchPost } from '../../actions/posts_actions';
import { updateUser } from '../../actions/users_actions';
import { fetchComments } from '../../actions/comments_actions';
import { fetchUserByUsername} from '../../actions/users_actions';
import { createFollow, deleteFollow } from '../../actions/follows_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    username: ownProps.match.params.username,
    posts: Object.values(state.entities.posts),
    otherUser: state.entities.otherUser,

    followerIds: Object.keys(state.entities.otherUser).length ? 
      (Object.values(state.entities.otherUser.follower)).map(({ follower_id }) => follower_id) 
      : null,
    followingIds: Object.keys(state.entities.otherUser).length ? 
      (Object.values(state.entities.otherUser.followed)).map(({ followed_id }) => followed_id) 
      : null,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: posts => dispatch(fetchPosts(posts)),
    fetchPost: postId => dispatch(fetchPost(postId)),
    updateUser: user => dispatch(updateUser(user)),
    fetchComments: () => dispatch(fetchComments()),
    fetchUserByUsername: username => dispatch(fetchUserByUsername(username)),
    createFollow: follow => dispatch(createFollow(follow)),
    deleteFollow: followId => dispatch(deleteFollow(followId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OtherUserShow);