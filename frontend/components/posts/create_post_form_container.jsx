import { connect } from 'react-redux';
import PostForm from './create_post_form';
import { createPost} from '../../actions/posts_actions'

const mapStateToProps = state => {
    return {
        post: {
            currentUser: state.entities.users[state.session.id],
            caption: ''
        },
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createPost: post => dispatch(createPost(post)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(PostForm);