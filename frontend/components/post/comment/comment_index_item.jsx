import React from 'react';
import { Link } from 'react-router-dom';

const CommentIndexItem = ({ comment, author }) => (
  <li>
    <span className='bold-600 font-size-10'><
      Link to={`/users/${author.id}`}>{author.username} </Link>
    </span>
    <span className='font-size-10'>
      {comment.comment}
    </span>
  </li>

);

export default CommentIndexItem;