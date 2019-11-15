import { connect } from 'react-redux';
import Post from './post';
import { createLike, deleteLike, fetchLikes } from '../../actions/likes_actions';


const mapStateToProps = (state, ownProps) => {

    return {
        like: {
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
        fetchLikes: () => dispatch(fetchLikes()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);