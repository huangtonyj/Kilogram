import React from 'react';
import CommentIndexItem from './comment_index_item';

const CommentIndex = ({ comments, authors }) => (
  <ul>
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