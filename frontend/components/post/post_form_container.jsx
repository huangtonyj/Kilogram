import { connect } from 'react-redux';

import { ajaxPostPost } from '../../actions/post_actions';
import PostForm from './post_form';

const mapStateToProps = ({ entities: { posts } }) => ({

});

const mapDispatchToProps = dispatch => ({
  postPosts: (post) => dispatch(ajaxPostPost(post)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);