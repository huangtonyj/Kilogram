# Don't need to return post because post has to be there to commment
# json.posts do
#   json.set! @comment.post_id do
#     json.extract! @comment.post, :id, :author_id, :caption, :location, :created_at
#     json.photoUrl url_for(@post.photo)
#     json.likers do
#       @post.likers.each do |liker|
#         json.set! liker.id, :true
#       end
#     end
#   end
# end

# Don't need to return user because it is current user making the comment
# json.users do
#   json.set! @comment.author_id do
#     json.extract! @comment.author, :id, :username
#   end
# end

json.comments do
  json.set! @comment.id do
    json.extract! @comment, :id, :post_id, :parent_comment_id, :author_id, :comment
  end
end