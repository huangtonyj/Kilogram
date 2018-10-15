class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:username],
      params[:password]
    )

    if @user
      sign_in(@user)
      render "api/session/show"
    else
      render json: ["Sorry, your password was incorrect.", "Please double-check your password."], status: 401
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
