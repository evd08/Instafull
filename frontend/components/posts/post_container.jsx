import { connect } from 'react-redux';
// import Post from './post';
import Post from './post_hooks';
import { createLike, deleteLike, fetchLikes } from '../../actions/likes_actions';
import { createComment, deleteComment, fetchComments } from '../../actions/comments_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        data: {
            currentUserId: state.entities.users[state.session.id].id, //state.session.id ?same?
            post_id: ownProps.post.id
        },
        post: ownProps.post,
        currentUser: state.entities.users[state.session.id],
        // likeId: state.entities.post.likeId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createLike: like => dispatch(createLike(like)),
        deleteLike: likeId => dispatch(deleteLike(likeId)),
        createComment: comment => dispatch(createComment(comment)),
        deleteComment: commentId => dispatch(deleteComment(commentId)),
        fetchLikes: () => dispatch(fetchLikes()),
        fetchComments: () => dispatch(fetchComments()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);