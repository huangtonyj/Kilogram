import { connect } from 'react-redux';

import { ajaxPostsGet, ajaxPostGet } from '../../actions/post_actions';
import PostIndex from './post_index';

const mapStateToProps = ({ entities: { posts, users }, session }) => {
  // debugger

  // const followedPosts = Object.values(posts)
  //   .filter((post) => users[session.id].followees[post.authorId]);

  const followedPosts = users[session.id].followees ? Object.values(posts)
    .filter((post) => users[session.id].followees[post.authorId]) : [];

  return ({
    // posts: Object.keys(posts)
    //   .map((postId) => posts[postId]),
    posts: followedPosts,
    users: users,
    // followees: users[session.id].followees
  })
};

const mapDispatchToProps = dispatch => ({
  getPosts: () => dispatch(ajaxPostsGet())
});

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);