import { connect } from 'react-redux';
import PostForm from './create_post_form';
import { createPost, fetchPosts } from '../../actions/posts_actions'

const mapStateToProps = state => {
    return {
        post: {
            // user_id: state.session.id,
            currentUser: state.entities.users[state.session.id],
            caption: ''
        },
        // posts: state.entities.posts,
        // formType: 'Create Post'
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createPost: post => dispatch(createPost(post)),
        // fetchPosts: () => dispatch(fetchPosts())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(PostForm);