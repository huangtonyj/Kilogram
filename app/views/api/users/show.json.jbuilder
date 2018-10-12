# json.partial! "api/users/user", user: @user

# json.extract! @user, :id, :username, :description, :posts

json.users do
  json.set! @user.id do
    json.extract! @user, :id, :username, :description
  end
end

json.posts do
  @user.posts.each do |post|
    json.set! post.id do
      json.extract! post, :id, :author_id, :caption, :created_at
      json.photoUrl url_for(post.photo)
    end
  end
end



# json.posts do
#   json.set! @user.posts do
#     json.extract! @post, :id, :author_id, :caption, :created_at
#     json.photoUrl url_for(@post.photo)
#   end
# end

# json.users do
#   json.set! @post.author_id do
#     json.extract! @post.author, :id, :username
#   end
# end