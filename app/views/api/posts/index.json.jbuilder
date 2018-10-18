json.posts do
  @posts.each do |post|
    json.set! post.id do
      json.extract! post, :id, :author_id, :caption, :location, :created_at, :author
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

json.users do
  @posts.each do |post|
    json.set! post.author_id do
      json.extract! post.author, :id, :username
    end
  end
end

json.comments do
  @posts.each do |post|
    post.comments.each do |comment|
      json.set! comment.id do
        json.extract! comment, :id, :post_id, :parent_comment_id, :author_id, :comment
      end
    end
  end
end