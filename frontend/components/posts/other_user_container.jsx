import { connect } from 'react-redux';
import OtherUserShow from './other_user_show';
import { fetchPosts } from '../../actions/posts_actions';
import { fetchComments } from '../../actions/comments_actions';
import { fetchUserByUsername} from '../../actions/users_actions';

const mapStateToProps = (state, ownProps) => {
  // debugger
  return {
    username: ownProps.match.params.username,
    posts: Object.values(state.entities.posts),
    otherUser: state.entities.otherUser,
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