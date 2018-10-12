export const ajaxFollowPostToggle = (followee_id) => (
  $.ajax({
    method: 'POST',
    url: 'api/follows',
    data: {
      followee_id: followee_id
    }
  })
);