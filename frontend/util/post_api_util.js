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

// window.ajaxPostsGet = ajaxPostsGet;
// window.ajaxPostGet = ajaxPostGet;