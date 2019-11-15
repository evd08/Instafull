import { connect } from 'react-redux';
import PostIndex from './post_index';
import { fetchPosts } from '../../actions/posts_actions';


const mapStateToProps = (state, ownProps) => {
    // debugger
    

    return {
        posts: Object.values(state.entities.posts),
        currentUser: state.entities.users[state.session.id].username,
        currentUserId: state.entities.users[state.session.id].id,
        // users: Object.values(state.entities.users),
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPosts: userId => dispatch(fetchPosts(userId)),
        createLike: like => dispatch(createLike(like)),
        deleteLike: likeId => dispatch(deleteLike(likeId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex)