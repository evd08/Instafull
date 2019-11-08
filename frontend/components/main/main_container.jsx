import { connect } from 'react-redux';
import Main from './main';
import { fetchPosts } from '../../actions/posts_actions';

const mapStateToProps = (state, ownProps) => ({
    posts: state.posts
    
})

const mapDispatchToProps = dispatch => {
    return {
        fetchPosts: posts => dispatch(fetchPosts(posts))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);