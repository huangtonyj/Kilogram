export const ajaxFollowPost = (followeeId) => (
  $.ajax({
    method: 'POST',
    url: 'api/follows',
    data: {
      followee_id: followeeId
    }
  })
);

export const ajaxFollowDelete = (followeeId) => (
  $.ajax({
    method: 'DELETE',
    url: `api/follows/${followeeId}`,
  })
);