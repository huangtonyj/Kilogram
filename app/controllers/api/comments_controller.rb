class Api::CommentsController < ApplicationController

  def create
    @comment = Comment.new(comment_params)
    @comment.author_id = current_user.id
    

    if @comment.save
      render json: 
        {post_id: @comment.post_id, 
        user_id: @comment.author_id,
        comment: @comment.comment}
    else 
      render json: @comment.errors.full_messages, status: 422
    end

  end

  def destroy
    # @like = current_user.likes.find_by(post_id: like_params[:post_id].to_i)

    # if @like
    #   @like.destroy
    #   render json: {post_id: @like.post_id, user_id: @like.user_id}
    # else
    #   render json: @like.errors.full_messages, status: 422
    # end

  end

  private

  def comment_params
    params.require(:comment).permit(:post_id, :comment)
  end

end
