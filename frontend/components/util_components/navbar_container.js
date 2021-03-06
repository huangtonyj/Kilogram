import {
  connect
} from 'react-redux';

import {
  ajaxSessionDelete
} from '../../actions/session_actions';
import {
  ajaxUserGet
} from '../../actions/user_actions';
import {
  openModal,
  closeModal
} from '../../actions/modal_actions';
import NavBar from './navbar';

const mapStateToProps = ({
  session,
  entities: {
    users
  }
}) => ({
  currentUser: users[session.id]
});

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(ajaxSessionDelete()),
  getCurrentUserInfo: (id) => dispatch(ajaxUserGet(id)),

  openModal: (modal) => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);