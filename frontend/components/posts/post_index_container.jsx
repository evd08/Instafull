import { connect } from 'react-redux';
import PostIndex from './post_index';
import { fetchPosts } from '../../actions/posts_actions';
import { fetchComments } from '../../actions/comments_actions';
// import { fetchUsers } from '../../actions/users_actions';

const mapStateToProps = (state, ownProps) => {
    debugger
    return {
        posts: Object.values(state.entities.posts).reverse(),
        currentUser: state.entities.users[state.session.id],
        followingIds: Object.values(state.entities.users[state.session.id].followed).map(({ followed_id }) => followed_id)
        // currentUserId: state.entities.users[state.session.id].id,
        // users: Object.values(state.entities.users),
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPosts: userId => dispatch(fetchPosts(userId)),
        createLike: like => dispatch(createLike(like)),
        deleteLike: likeId => dispatch(deleteLike(likeId)),
        fetchComments: () => dispatch(fetchComments()),
        // fetchUsers: () => dispatch(fetchUsers()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex)