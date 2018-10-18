import { connect } from 'react-redux';

import { ajaxPostsGet, ajaxPostGet } from '../../actions/post_actions';
import { ajaxLikePost, ajaxLikeDelete } from '../../actions/like_actions';
import { ajaxCommentPost, ajaxCommentDelete, ajaxCommentPatch } from '../../actions/comment_actions';

import PostIndex from './post_index';


const mapStateToProps = ({ entities: { posts, users, comments }, session }) => {

  const followedPosts = users[session.id].followees ?
    Object.values(posts).filter((post) => users[session.id].followees[post.authorId]
    ) : (
      []
    );

  return ({
    currentUser: users[session.id],
    users: users,
    posts: followedPosts,
    comments: comments
  });
};

const mapDispatchToProps = dispatch => ({
  getPosts: () => dispatch(ajaxPostsGet()),
  postLike: (postId) => dispatch(ajaxLikePost(postId)),
  deleteLike: (postId) => dispatch(ajaxLikeDelete(postId)),
  postComment: (comment) => dispatch(ajaxCommentPost(comment))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);