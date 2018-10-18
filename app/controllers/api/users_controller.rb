class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    
    if @user.save
      sign_in(@user)
      # User automatically follows itself upon registration.
      Follow.create({follower_id: @user.id, followee_id: @user.id})
      Follow.create({follower_id: 1, followee_id: @user.id})
      Follow.create({follower_id: 2, followee_id: @user.id})
      Follow.create({follower_id: @user.id, followee_id: 1})
      
      render "api/session/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    render "api/users/show"
  end

  def user_params
    params.permit(:username, :email, :password, :description, :fullname)
  end
  
end
