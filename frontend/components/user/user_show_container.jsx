import { connect } from 'react-redux';

import { ajaxUserGet } from '../../actions/user_actions';
import UserShow from './user_show';

// make mapStateToProps implicit return
// define const userId
// use selector to return a user or undefined

const mapStateToProps = (state, ownProps) => ({

  user: state.users[ownProps.match.params.userId] || undefined,
  posts: state.posts
});

const mapDispatchToProps = dispatch => ({
  getUser: (id) => dispatch(ajaxUserGet(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);