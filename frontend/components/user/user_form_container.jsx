import { connect } from 'react-redux';

import { ajaxUserPost } from '../../actions/user_actions';
import { ajaxSessionPost } from '../../actions/session_actions';
import UserForm from './user_form.jsx';

const mapStateToProps = ({ errors }) => ({
  errors: errors.user
});

const mapDispatchToProps = dispatch => ({
  signUp: (user) => dispatch(ajaxUserPost(user)),
  signIn: (user) => dispatch(ajaxSessionPost(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);