Rails.application.routes.draw do
  
  #get 'users/index'

  devise_for :users, :controllers => { registrations: 'registrations' }  

  root to: 'pages#home'
  get 'menu'       => 'pages#menu'
  get 'directory'  => 'users#index'
  get 'info'       => 'pages#info'
  get 'shops' => 'users#index'
  #match '/users',   to: 'users#index',   via: 'get'
  #get 'users/:id' => 'users#show', as: :user
  get 'users/:user_name' => 'users#show', as: :user
  resources :sections,    :only => [:new, :create, :edit, :update, :destroy]
  resources :items,       :only => [:new, :create, :edit, :update, :destroy]
  resources :users,       :only => [:show]
  resources :restaurants, :only => [:new, :create, :edit, :update]
  resources :schedules,   :only => [:new, :create, :edit, :update]
end
