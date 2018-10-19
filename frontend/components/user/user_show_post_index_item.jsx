import React from 'react';
import { Link } from 'react-router-dom';

const UserShowPostIndexItem = ({ post, openModal }) => (
  <li>
    <img
      className="user-show-index-item-image"
      src={post.photoUrl}
      onClick={() => openModal({ modal: 'PostShow', postId: post.id })}
    />
  </li>
);

export default UserShowPostIndexItem;