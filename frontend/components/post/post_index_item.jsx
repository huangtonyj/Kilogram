import React from 'react';

const PostIndexItem = ({ post, author }) => (
  <li>
    <div className="post-index-item">
      <p>{author.username}</p>
      <img
        className="post-index-item-image"
        src={post.photoUrl}
        width="400px"
      />
      <p>{post.caption}</p>
    </div>
  </li>
);

export default PostIndexItem;