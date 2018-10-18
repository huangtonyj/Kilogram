export const ajaxCommentPost = (comment) => (
  $.ajax({
    method: 'POST',
    url: 'api/comments',
    data: {
      comment: comment
    }
  })
);

// export const ajaxCommentDelete = (postId) => (
//   $.ajax({
//     method: 'DELETE',
//     url: `api/likes/${postId}`,
//   })
// );