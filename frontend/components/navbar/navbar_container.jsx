import { connect } from 'react-redux';
import Navbar from './navbar';
import { logout } from '../../actions/session_actions';
import { fetchSearch } from '../../actions/users_actions';

const mapStateToProps = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
        users: state.entities.users,
    }
};

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
    fetchSearch: username => dispatch(fetchSearch(username)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);