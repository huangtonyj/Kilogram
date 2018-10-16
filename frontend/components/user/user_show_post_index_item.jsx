import React from 'react';

const UserShowPostIndexItem = ({ post, author }) => (
  <li>
    <img
      className="user-index-item-image"
      src={post.photoUrl}
    />
  </li>
);

export default UserShowPostIndexItem;