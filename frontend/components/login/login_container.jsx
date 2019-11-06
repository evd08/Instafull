import { connect } from 'react-redux';
import Login from './login';
import { login } from '../../actions/session_actions'
import { openModal } from '../../actions/modal_actions'

const mapStateToProps = state => {
    return {
        errors: state.errors.session,
    }
}


const mapDispatchToProps = (dispatch) => ({
    login: user => dispatch(login(user)),
    openModal: modal => dispatch(openModal(modal))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
