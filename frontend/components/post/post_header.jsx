import React from 'react';
import { Link } from 'react-router-dom';

const Postheader = ({ currentPost, author }) => (
  <div className='post-header'>
    <div className='post-header-avatar'>
      {/* <i className="fas fa-user "></i> */}
    </div>

    <div className='post-header-info'>
      <p className='bold-600 font-size-10'>
        <Link to={`/users/${author.id}`}>{author.username} </Link>
      </p>

      <p className='post-header-info-location'>
        {currentPost.location}
      </p>
    </div>

  </div>
);

export default Postheader;