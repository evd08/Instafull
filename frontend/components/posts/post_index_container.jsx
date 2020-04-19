import { connect } from 'react-redux';
import PostIndex from './post_index';
// import PostIndex from './post_index_hooks';
import { fetchPosts } from '../../actions/posts_actions';
import { fetchComments } from '../../actions/comments_actions';
import { fetchFollows } from '../../actions/follows_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        posts: Object.values(state.entities.posts).slice(0, Object.values(state.entities.posts).length - 1).reverse(),
        total: Object.values(state.entities.posts)[Object.values(state.entities.posts).length - 1],
        currentUser: state.entities.users[state.session.id],
        followingIds: Object.values(state.entities.follows).length ? 
            Object.values(state.entities.follows.followed).map(({ followed_id }) => followed_id) 
            : [],
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPosts: (userId, postsLoaded) => dispatch(fetchPosts(userId, postsLoaded)),
        createLike: like => dispatch(createLike(like)),
        deleteLike: likeId => dispatch(deleteLike(likeId)),
        fetchComments: () => dispatch(fetchComments()),
        fetchFollows: userId => dispatch(fetchFollows(userId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex)