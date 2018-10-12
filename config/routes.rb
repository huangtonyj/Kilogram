Rails.application.routes.draw do
  
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do

    resources :users, only: [:create, :show]

    resource :session, only: [:create, :destroy]

    resources :posts, only: [:create, :show, :index, :update, :destroy]

    resources :likes, only: [:create, :destroy]

    resources :follows, only: [:create]

  end

end
