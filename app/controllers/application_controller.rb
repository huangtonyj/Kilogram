class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token

  helper_method :current_user, :signed_in?

  private

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def signed_in?
    !!current_user
  end

  def sign_in(user)
    @current_user = user
    session[:session_token] = user.reset_session_token!
  end

  def sign_out
    @current_user.reset_session_token!
    session[:session_token] = nil
  end

  def require_logged_in
    unless current_user
      render json: { base: ['valid credentials']}, status: 401
    end
  end

end
