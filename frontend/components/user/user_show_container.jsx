import { connect } from 'react-redux';

import { ajaxUserGet } from '../../actions/user_actions';
import { ajaxFollowPost, ajaxFollowDelete } from '../../actions/follow_actions';
import UserShow from './user_show';

const mapStateToProps = (state, ownProps) => {

  const userId = ownProps.match.params.userId;
  const allPosts = state.entities.posts;

  return ({
    user: state.entities.users[userId] || undefined,
    posts: Object.keys(allPosts)
      .map((postId) => allPosts[postId])
      .filter((post) => post.authorId === parseInt(userId))
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    getUser: (id) => dispatch(ajaxUserGet(id)),
    postFollow: (followeeId) => dispatch(ajaxFollowPost(followeeId)),
    deleteFollow: (followeeId) => dispatch(ajaxFollowDelete(followeeId)),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);