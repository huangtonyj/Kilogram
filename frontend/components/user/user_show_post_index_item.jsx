import React from 'react';

const UserShowPostIndexItem = ({ post, author }) => (
  <li>
    <div className="post-index-item">
      <img
        className="post-index-item-image"
        src={post.photoUrl}
        width="400px"
      />
    </div>
  </li>
);

export default UserShowPostIndexItem;