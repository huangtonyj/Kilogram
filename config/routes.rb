Rails.application.routes.draw do
  
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do

    resources :users, only: [:create, :show]

    resource :session, only: [:create, :destroy]

    resources :posts, only: [:create, :show, :index, :update, :destroy]

    resources :likes, only: [:create]

    resources :follows, only: [:create]

    resources :comments, only: [:create]

  end

  delete 'api/follows/:followee_id', to: 'api/follows#destroy', defaults: {format: :json}

  delete 'api/likes/:post_id', to: 'api/likes#destroy', defaults: {format: :json}

  delete 'api/comments/:post_id', to: 'api/comments#destroy', defaults: {format: :json}
  patch 'api/comments/:post_id/edit', to: 'api/comments#update', defaults: {format: :json}

end
