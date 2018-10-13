export const ajaxFollowPost = (followeeId) => {
  return (
    $.ajax({
      method: 'POST',
      url: 'api/follows',
      data: {
        followee_id: followeeId
      }
    })
  );
};