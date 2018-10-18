import React from 'react';

import PostActionBar from './post_action_bar';
import PostImage from './post_image';
import PostHeaader from './post_header';
import CommentIndex from './comment/comment_index';
import CommentForm from './comment/comment_form';

class PostIndexItem extends React.Component {

  render() {
    const {
      currentUser,
      currentPost,
      author,
      users,
      comments,
      postLike,
      deleteLike,
      postComment } = this.props;

    if (!this.props.currentPost) { return null; }

    return (
      <div className=''>
        <PostHeaader
          currentPost={currentPost}
          author={author}
        />

        <PostImage
          currentUser={currentUser}
          currentPost={currentPost}
          postLike={postLike}
        />

        <PostActionBar
          currentUser={currentUser}
          currentPost={currentPost}
          postLike={postLike}
          deleteLike={deleteLike}
        />

        <CommentIndex
          currentPost={currentPost}
          author={author}
          authors={users}
          comments={comments}
        />

        <div>
          <p className='post-timestamp'>
            Once upon a time, not so long ago.
            </p>
        </div>

        <CommentForm
          currentPost={currentPost}
          postComment={postComment}
        />
      </div>
    );
  }
}

export default PostIndexItem;