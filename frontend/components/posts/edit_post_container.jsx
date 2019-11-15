import { connect } from 'react-redux';
import EditPostForm from './edit_post_form';
import { fetchPost, deletePost } from '../../actions/posts_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        // posts: Object.values(state.entities.posts), 
        post: state.entities.posts[ownProps.match.params.postId],
        currentUser: state.entities.users[state.session.id],
    }    
}

const mapDispatchToProps = dispatch => {
    return {
        deletePost: postId => dispatch(deletePost(postId)),
        fetchPost: postId => dispatch(fetchPost(postId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPostForm);