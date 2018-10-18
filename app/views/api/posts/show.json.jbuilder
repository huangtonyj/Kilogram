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