import { connect } from 'react-redux';
import UserPostShow from './user_post_show';
import { fetchPosts, fetchPost } from '../../actions/posts_actions';
import { updateUser } from '../../actions/users_actions';
import { fetchComments } from '../../actions/comments_actions';
// import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        posts: Object.values(state.entities.posts),
        // currentUserPosts: state.entities.posts[ownProps.match.params.postId],
        // post: state.entities.posts[ownProps.match.params.postId],
        currentUser: state.entities.users[state.session.id],
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPosts: posts => dispatch(fetchPosts(posts)),
        fetchPost: postId => dispatch(fetchPost(postId)),
        updateUser: user => dispatch(updateUser(user)),
        fetchComments: () => dispatch(fetchComments()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPostShow);