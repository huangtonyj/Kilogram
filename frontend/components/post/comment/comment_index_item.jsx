import React from 'react';

const CommentIndexItem = ({ comment, author }) => (
  <li>
    <span className='comment-author'>{author.username} </span>
    <span className='comment-body'>{comment.comment}</span>
  </li>

);

export default CommentIndexItem;