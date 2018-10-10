export const ajaxSessionPost = (user) => (
  $.ajax({
    method: 'POST',
    url: 'api/session',
    data: user
  })
);

export const ajaxSessionDelete = () => (
  $.ajax({
    method: 'DELETE',
    url: 'api/session'
  })
);