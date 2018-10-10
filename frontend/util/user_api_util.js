export const ajaxUserPost = (user) => (
  $.ajax({
    method: 'POST',
    url: 'api/users',
    data: user
  })
);

export const ajaxUserGet = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/users/${id}`
  })
);