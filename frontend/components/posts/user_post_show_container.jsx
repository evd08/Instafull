import { connect } from 'react-redux';
import UserPostShow from './user_post_show';
import { fetchPosts, fetchPost } from '../../actions/posts_actions'

const mapStateToProps = (state, ownProps) => ({
    post: state.entities.posts[ownProps.match.params.PostId],
    currentUser: state.entities.users[state.session.id],
})

const mapDispatchToProps = dispatch => {
    return {
        fetchPosts: posts => dispatch(fetchPosts(posts)),
        fetchPost: postId => dispatch(fetchPost(postId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPostShow);