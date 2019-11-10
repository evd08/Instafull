import { connect } from 'react-redux';
import PostIndex from './post_index';
import { fetchPosts } from '../../actions/posts_actions'

const mapStateToProps = (state, ownProps) => {
    debugger
    return {
        posts: Object.values(state.entities.posts),
        users: state.entities.users,
        currentUser: state.entities.users[state.session.id].username
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPosts: () => dispatch(fetchPosts()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex)