import React from 'react';

const PostIndexItem = ({ post }) => (
  <li>
    <div>
      <img
        className="post-index-item"
        src={post.photoUrl}
        width="300px"
      />
      <p>{post.caption}</p>
    </div>
  </li>
);

export default PostIndexItem;