import React from 'react';
import { Link } from 'react-router-dom';

const CommentIndexItem = ({ comment, author }) => (
  <li>
    <span className='comment-author'><Link to={`/users/${author.id}`}>{author.username} </Link> </span>
    <span className='comment-body'>{comment.comment}</span>
  </li>

);

export default CommentIndexItem;