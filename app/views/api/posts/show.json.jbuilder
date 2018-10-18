json.posts do
  json.set! @post.id do
    json.extract! @post, :id, :author_id, :caption, :location, :created_at
    json.photoUrl url_for(@post.photo)
    json.likers do
      @post.likers.each do |liker|
        json.set! liker.id, :true
      end
    end
  end
end

json.users do
  json.set! @post.author_id do
    json.extract! @post.author, :id, :username
  end
end

json.comments do
  @post.comments.each do |comment|
    json.set! comment.id do
      json.extract! comment, :id, :post_id, :parent_comment_id, :author_id, :comment
    end
  end
end