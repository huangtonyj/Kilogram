import { connect } from 'react-redux';

import { ajaxUserGet } from '../../actions/user_actions';
import UserShow from './user_show';

const mapStateToProps = (state, ownProps) => ({
  users: state.users,
  posts: state.posts
});

const mapDispatchToProps = dispatch => ({
  getUser: (id) => dispatch(ajaxUserGet(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);