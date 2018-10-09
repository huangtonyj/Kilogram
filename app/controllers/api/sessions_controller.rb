class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      sign_in(@user)
      render "api/users/show"
    else
      render json: ["Invalid sign in credentials"], status: 401
    end
  end

  def destroy
    @user = current_user

    if @user
      sign_out
      render json: {}
    else
      render json: ["Nobody was signed in"], status: 404
    end
  end

end
