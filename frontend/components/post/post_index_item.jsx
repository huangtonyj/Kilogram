import React from 'react';
import { Link } from 'react-router-dom';

const PostIndexItem = ({ post, author }) => (
  <li>
    <div className="post-index-item">
      <div>
        <Link to={`/users/${author.id}`}>{author.username}</Link>
      </div>

      <img
        className="post-index-item-image"
        src={post.photoUrl}
        width="400px"
      />
      <p>{post.caption}</p>
    </div>
  </li >
);

export default PostIndexItem;