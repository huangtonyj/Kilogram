class Api::FollowsController < ApplicationController

  def create
    
    @follow = current_user.followee.find_by(followee: follow_params[:followee_id].to_i) || nil
    
    if @follow
      @follow.destroy
      render json: ["You've unfollowed"]
    else
      @follow = Follow.new(follow_params)
      @follow.follower_id = current_user.id
      @follow.save
      render json: ["You've followed"]
    end

  end
  
  private

  def follow_params
    params.permit(:followee_id)
  end

end
