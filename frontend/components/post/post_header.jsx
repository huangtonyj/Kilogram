import React from 'react';
import { Link } from 'react-router-dom';

const Postheader = ({ currentPost, author }) => (
  <div>
    <i className="fas fa-user "></i>

    <p className='post-index-item-caption-author'>
      <Link to={`/users/${author.id}`}>{author.username} </Link>
    </p>

    <p className='post-index-item-location'>
      {currentPost.location}
    </p>

  </div>
);

export default Postheader;