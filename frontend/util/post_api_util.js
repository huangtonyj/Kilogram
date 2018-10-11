export const ajaxPostsGet = () => (
  $.ajax({
    method: 'GET',
    url: 'api/posts'
  })
);

export const ajaxPostGet = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/posts/${id}`
  })
);

export const ajaxPostPost = (post) => (
  $.ajax({
    method: 'POST',
    url: 'api/posts'
  })
);