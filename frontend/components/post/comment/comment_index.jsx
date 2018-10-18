import React from 'react';
import CommentIndexItem from './comment_index_item';
import { Link } from 'react-router-dom';

const CommentIndex = ({ currentPost, author, authors, comments }) => (
  <ul>
    <li>
      <span className='post-index-item-caption-author'>
        <Link to={`/users/${author.id}`}>{author.username} </Link>
      </span>
      <span className='post-index-item-caption-caption'>
        {currentPost.caption}
      </span>
    </li>


    {
      comments.map((comment) => (
        <CommentIndexItem
          key={comment.id}
          comment={comment}
          author={authors[comment.authorId]}
        />
      ))
    }
  </ul>

);

export default CommentIndex;