json.users do
  json.set! @user.id do
    json.extract! @user, :id, :username, :description, :fullname
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
  end
end

json.posts do
  @user.posts.each do |post|
    json.set! post.id do
      json.extract! post, :id, :author_id, :caption, :location, :created_at
      json.photoUrl url_for(post.photo)
      json.likers do
        json.set! 0, :false
        post.likers.each do |liker|
          json.set! liker.id, :true
        end
     end
    end
  end
end
