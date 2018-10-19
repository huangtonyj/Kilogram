import React from 'react';

import PostActionBar from './post_action_bar';
import PostImage from './post_image';
import PostHeader from './post_header';
import CommentIndex from './comment/comment_index';
import CommentForm from './comment/comment_form';

class PostShow extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getPost(this.props.match.params.postId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.postId !== nextProps.match.params.postId) {
      this.props.getPost(nextProps.match.params.postId);
    }
  }

  render() {
    const {
      currentUser,
      currentPost,
      users,
      comments,
      postLike,
      deleteLike,
      postComment } = this.props;

    if (!this.props.currentPost) { return null; }
    if (Object.keys(users).length < 2) return null;

    const author = users[currentPost.authorId];

    return (
      <div className='post-show-container'>
        <div className='post-show-image-container'>
          <PostImage
            currentUser={currentUser}
            currentPost={currentPost}
            postLike={postLike}
          />
        </div>

        <div className='post-show-info-container'>
          <PostHeader
            currentPost={currentPost}
            author={author}
          />

          <CommentIndex
            currentPost={currentPost}
            author={author}
            users={users}
            comments={comments}
          />


          <PostActionBar
            currentUser={currentUser}
            currentPost={currentPost}
            postLike={postLike}
            deleteLike={deleteLike}
          />

          <div>
            <p className='post-timestamp'>
              {Date(currentPost.createdAt).slice(4, 15)}
            </p>
          </div>

          <CommentForm
            currentPost={currentPost}
            postComment={postComment}
          />
        </div>
      </div>
    );
  }
}

export default PostShow;