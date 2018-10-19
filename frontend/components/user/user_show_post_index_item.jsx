import React from 'react';
import { Link } from 'react-router-dom';

const UserShowPostIndexItem = ({ post, openModal }) => (
  <li>
    {/* <Link to={`/posts/${post.id}`}> */}
    <img
      className="user-show-index-item-image"
      src={post.photoUrl}
      onClick={() => openModal({ modal: 'PostShow', postId: post.id })}
    // onClick={() => openModal('PostShow')}
    // onClick={() => console.log(openModal)}
    />
    {/* </Link> */}
  </li>
);

export default UserShowPostIndexItem;