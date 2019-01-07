import { connect } from 'react-redux';

import { ajaxUserGet } from '../../actions/user_actions';
import { ajaxPostGet } from "../../actions/post_actions";
import { ajaxFollowPost, ajaxFollowDelete } from '../../actions/follow_actions';
import UserShow from './user_show';
import { openModal, closeModal } from '../../actions/modal_actions';
import { ajaxSessionDelete } from "../../actions/session_actions";

const mapStateToProps = (state, ownProps) => {

  const userId = ownProps.match.params.userId;

  return ({
    currentUser: state.entities.users[state.session.id],
    user: state.entities.users[userId] || undefined,
    posts: Object.values(state.entities.posts)
      .filter((post) => post.authorId === parseInt(userId))
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    getUser: (id) => dispatch(ajaxUserGet(id)),

    getPost: (id) => dispatch(ajaxPostGet(id)),

    postFollow: (followeeId) => dispatch(ajaxFollowPost(followeeId)),
    deleteFollow: (followeeId) => dispatch(ajaxFollowDelete(followeeId)),

    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),

    signOut: () => dispatch(ajaxSessionDelete()),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);