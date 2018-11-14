import React from 'react';
import { Link } from 'react-router-dom';

const UserShowPostIndexItem = ({ post, getPost, openModal }) => (
  <li>
    <img
      className="user-show-index-item-image"
      src={post.photoUrl}
      // onClick={() => openModal({ modal: 'PostShow', postId: post.id })}
      // onClick={() => getPost(post.id)}
      onClick={() => getPost(post.id).then(openModal({ modal: "PostShow", postId: post.id }))}
    />
  </li>
);

export default UserShowPostIndexItem;