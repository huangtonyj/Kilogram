import { connect } from 'react-redux';

import { ajaxPostsGet, ajaxPostGet } from '../../actions/post_actions';
import { ajaxLikePost, ajaxLikeDelete } from '../../actions/like_actions';
import { ajaxCommentPost, ajaxCommentDelete, ajaxCommentPatch } from '../../actions/comment_actions';

import PostShowModal from './post_show_modal';


const mapStateToProps = ({ entities: { posts, users, comments }, session, ui: { modal } }, ownProps) => {



  const currentPost = posts[modal.postId]
  if (!currentPost) return {};

  return ({
    currentUser: users[session.id],
    currentPost: currentPost,
    users: users, // users selector can be more elaborate
    comments: Object.values(comments)
      .filter((comment) => comment.postId === currentPost.id),
  });
};

const mapDispatchToProps = dispatch => ({
  getPost: (id) => dispatch(ajaxPostGet(id)),

  postLike: (postId) => dispatch(ajaxLikePost(postId)),
  deleteLike: (postId) => dispatch(ajaxLikeDelete(postId)),

  postComment: (comment) => dispatch(ajaxCommentPost(comment)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostShowModal);