import { connect } from 'react-redux';

import { ajaxPostsGet, ajaxPostGet } from '../../actions/post_actions';
import PostIndex from './post_index';

const mapStateToProps = ({ entities: { posts, users } }) => ({
  posts: Object.keys(posts).map((postId) => posts[postId]),
  users: users
});

const mapDispatchToProps = dispatch => ({
  getPosts: () => dispatch(ajaxPostsGet())
});

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);