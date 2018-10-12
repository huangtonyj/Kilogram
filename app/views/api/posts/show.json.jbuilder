json.posts do
  json.set! @post.id do
    json.extract! @post, :id, :author_id, :caption, :created_at
    json.photoUrl url_for(@post.photo)
  end
end

json.users do
  json.set! @post.author_id do
    json.extract! @post.author, :id, :username
  end
end