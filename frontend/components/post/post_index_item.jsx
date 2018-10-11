import React from 'react';

const PostIndexItem = ({ post }) => (
  <li>
    <div className="post-index-item">
      <p>{post.authorId}</p>
      <img
        className="post-index-item-image"
        src={post.photoUrl}
        width="300px"
      />
      <p>{post.caption}</p>
    </div>
  </li>
);

export default PostIndexItem;