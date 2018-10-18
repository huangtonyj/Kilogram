import React from 'react';
import CommentIndexItem from './comment_index_item';
import { Link } from 'react-router-dom';

const CommentIndex = ({ currentPost, author, authors, comments }) => {

  return (
    < div className='comment-index-container' >
      <ul>
        <li>
          <span className='bold-600 font-size-10'>
            <Link to={`/users/${author.id}`}>{author.username} </Link>
          </span>
          <span className='font-size-10'>
            {currentPost.caption}
          </span>
        </li>


        {
          comments.map((comment) => (
            <CommentIndexItem
              key={comment.id}
              comment={comment}
              author={author}
            />
          ))
        }
      </ul>
    </div >
  );
};

export default CommentIndex;