import { connect } from 'react-redux';

import { ajaxUserPost } from '../../actions/user_actions';
import UserForm from './user_form.jsx';

const mapStateToProps = ({ errors }) => ({
  errors: errors.user
});

const mapDispatchToProps = dispatch => ({
  signUp: (user) => dispatch(ajaxUserPost(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);