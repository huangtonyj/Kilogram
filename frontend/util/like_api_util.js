export const ajaxLikePost = (postId) => (
  $.ajax({
    method: 'POST',
    url: 'api/likes',
    data: {
      post_id: postId
    }
  })
);

export const ajaxLikeDelete = (postId) => (
  $.ajax({
    method: 'DELETE',
    url: `api/likes/${postId}`,
  })
);