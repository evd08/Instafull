import { connect } from 'react-redux';
import Signup from './signup';
import { signup } from '../../actions/session_actions'
import { openModal } from '../../actions/modal_actions'

const mapStateToProps = state => {
    return {
        errors: state.errors.session,
    }
}


const mapDispatchToProps = (dispatch) => ({
    signup: user => dispatch(signup(user)),
    openModal: modal => dispatch(openModal(modal))
})

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
