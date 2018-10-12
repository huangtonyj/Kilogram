export const ajaxFollowPostToggle = (follow) => (
  $.ajax({
    method: 'POST',
    url: 'api/follows',
    data: follow
  })
);