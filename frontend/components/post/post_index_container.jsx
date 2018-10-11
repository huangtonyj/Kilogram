import { connect } from 'react-redux';

import { ajaxPostsGet, ajaxPostGet } from '../../actions/post_actions';
import PostIndex from './post_index';

const mapStateToProps = ({ entities: { posts } }) => ({
  posts: Object.keys(posts).map((postId) => posts[postId])
});

const mapDispatchToProps = dispatch => ({
  getPosts: () => dispatch(ajaxPostsGet()),
  // getPost: (id) => dispatch(ajaxPostsGet(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);