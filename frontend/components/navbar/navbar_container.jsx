import { connect } from 'react-redux';
import Navbar from './navbar';
import { logout } from '../../actions/session_actions';
import { fetchUsers } from '../../actions/users_actions';
import { fetchSearch } from '../../actions/users_actions';

const mapStateToProps = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
        users: state.entities.users,
        // user_id: state.session.id
    }
};

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchSearch: username => dispatch(fetchSearch(username)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);