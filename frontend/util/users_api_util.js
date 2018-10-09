export const ajaxSignUp = (user) => (
  $.ajax({
    method: 'POST',
    url: 'api/users',
    data: user
  })
);

export const ajaxGetUser = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/users/${id}`
  })
);