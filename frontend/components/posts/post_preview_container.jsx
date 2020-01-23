import { connect } from 'react-redux';
// import PostPreview from './post_preview'; //not hooks
import PostPreview from './post_preview_hooks' //hooks!
import { updatePost, deletePost, fetchPost } from '../../actions/posts_actions';
import { createComment, deleteComment, fetchComments } from '../../actions/comments_actions';
import { fetchUserByUsername, fetchUser } from '../../actions/users_actions';

const mapStateToProps = (state, ownProps) => {
    // debugger
    return {
        // posts: Object.values(state.entities.posts), 
        post: state.entities.posts[ownProps.match.params.postId],
        currentUser: state.entities.users[state.session.id],
        user: state.entities.otherUser,
        comments: Object.values(state.entities.comments),
    }    
}

const mapDispatchToProps = dispatch => {
    return {
        deletePost: postId => dispatch(deletePost(postId)),
        fetchPost: postId => dispatch(fetchPost(postId)),
        updatePost: post => dispatch(updatePost(post)),
        createComment: comment => dispatch(createComment(comment)),
        deleteComment: commentId => dispatch(deleteComment(commentId)),
        fetchComments: () => dispatch(fetchComments()),
        fetchUserByUsername: username => dispatch(fetchUserByUsername(username)),
        fetchUser: id => dispatch(fetchUser(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostPreview);