json.extract! @user, :id, :username, :description
  json.followees do
    @user.followees.each do |followee|
      json.set! followee.id, :true
    end
  end
  json.followers do
    @user.followers.each do |follower|
      json.set! follower.id, :true
    end
  end