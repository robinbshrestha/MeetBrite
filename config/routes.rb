Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :groups, only: [:index, :create, :show, :update, :destroy]

    resources :groups do
      resources :memberships, only: [ :create ]
      resource :memberships, only: [ :destroy ]
    end
  end
end
