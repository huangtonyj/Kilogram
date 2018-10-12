import { connect } from 'react-redux';

import { ajaxUserGet } from '../../actions/user_actions';
import UserShow from './user_show';

const mapStateToProps = (state, ownProps) => ({
  user: state.entities.users[ownProps.match.params.userId] || undefined,
  posts: Object.keys(state.entities.posts).map((postId) => state.entities.posts[postId])
});

const mapDispatchToProps = dispatch => ({
  getUser: (id) => dispatch(ajaxUserGet(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);