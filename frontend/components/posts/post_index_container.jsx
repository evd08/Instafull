import { connect } from 'react-redux';
import PostIndex from './post_index';
import { fetchPosts } from '../../actions/posts_actions';
import { fetchUser } from '../../actions/users_actions';

const mapStateToProps = (state, ownProps) => {
    // debugger
    return {
        posts: Object.values(state.entities.posts),
        currentUser: state.entities.users[state.session.id].username,
        users: state.entities.users,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPosts: () => dispatch(fetchPosts()),
        // fetchUser: (userId) => dispatch(fetchUser(userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex)