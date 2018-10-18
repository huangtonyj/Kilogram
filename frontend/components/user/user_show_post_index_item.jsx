import React from 'react';
import { Link } from 'react-router-dom';

const UserShowPostIndexItem = ({ post, author, history }) => (
  <li>
    <Link to={`/posts/${post.id}`}>
      <img
        className="user-show-index-item-image"
        src={post.photoUrl}
      />
    </Link>
  </li>
);

export default UserShowPostIndexItem;