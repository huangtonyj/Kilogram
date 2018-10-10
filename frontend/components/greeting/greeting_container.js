import {
  connect
} from 'react-redux';

import {
  ajaxSessionDelete
} from '../../actions/session_actions';
import Greeting from './greeting.jsx';

const mapStateToProps = ({
  session,
  entities: {
    users
  }
}) => ({
  currentUser: users[session.id]
});

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(ajaxSessionDelete())
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);