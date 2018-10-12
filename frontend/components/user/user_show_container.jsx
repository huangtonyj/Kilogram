import { connect } from 'react-redux';

import { ajaxUserGet } from '../../actions/user_actions';
import UserShow from './user_show';

const mapStateToProps = (state, ownProps) => ({
  userId: ownProps.match.params.userId,
  users: state.users
});

const mapDispatchToProps = dispatch => ({
  getUser: (id) => dispatch(ajaxUserGet(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);