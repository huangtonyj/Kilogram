class Api::PostsController < ApplicationController

  def index
    @posts = current_user.followees.map { |followee| followee.posts }.flatten
    render "api/posts/index"
  end
  
  def show
    @post = Post.find(params[:id])
    render "api/posts/show"
  end

  def create
    @post = Post.new(post_params)
    @post.author_id = current_user.id

    if @post.save
      render "api/posts/show"
    else
      render json: @post.errors.full_messages, status: 422
    end

  end

  def update
    @post = Post.find(params[:id])

    if @post.update(post_params)
      render "api/posts/show"
    else
      render json: @post.errors.full_messages, status: 422
    end

  end

  def destroy
    @post = Post.find(params[:id])

    if @post.destroy
      render json: {}
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  private

  def post_params
    params.require(:post).permit(:caption, :location, :photo)
  end

end
