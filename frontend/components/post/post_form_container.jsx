import { connect } from 'react-redux';

import { ajaxPostPost } from '../../actions/post_actions';
import PostForm from './post_form';

const mapStateToProps = ({ session, errors, entities: { posts } }) => ({
  errors: errors.post,
  authorId: session.id
});

const mapDispatchToProps = dispatch => ({
  postPosts: (post) => dispatch(ajaxPostPost(post)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);