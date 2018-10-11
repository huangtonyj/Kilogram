json.extract! @post, :id, :author_id, :caption, :location_id, :created_at
json.photoUrl url_for(@post.photo)


json.array! @posts do |post|
  json.extract! post, :id, :author_id, :caption, :location_id, :created_at
  json.photoUrl url_for(post.photo)
end