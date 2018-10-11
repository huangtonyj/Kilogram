import React from 'react';

const PostIndexItem = ({ post }) => (
  <li>
    <div>
      <img src={post.photoUrl} width="300px" />
      <p>{post.caption}</p>
    </div>
  </li>
);

export default PostIndexItem;