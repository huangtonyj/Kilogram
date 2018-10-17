class Api::LikesController < ApplicationController

  def create
    @like = Like.new(like_params)
    @like.user_id = current_user.id

    # @post = Post.find(like_params)

    if @like.save
      # render "api/posts/show"
      render json: {post_id: @like.post_id, user_id: @like.user_id}
    else 
      render json: @like.errors.full_messages, status: 422
    end
  end

  def destroy
    @like = current_user.likes.find_by(post_id: like_params[:post_id].to_i)

    if @like
      @like.destroy
      render json: {post_id: @like.post_id, user_id: @like.user_id}
    else
      render json: @like.errors.full_messages, status: 422
    end

  end

  private

  def like_params
    params.permit(:post_id)
  end

end
