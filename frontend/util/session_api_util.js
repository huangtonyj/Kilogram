export const ajaxSignIn = (user) => (
  $.ajax({
    method: 'POST',
    url: 'api/session',
    data: user
  })
);

export const ajaxSignOut = () => (
  $.ajax({
    method: 'DELETE',
    url: 'api/session'
  })
);