Rails.application.routes.draw do
  
  get 'users/index'

  devise_for :users, :controllers => { registrations: 'registrations' }  

  root to: 'pages#home'
  get 'menu'    => 'pages#menu'
  get 'directory' => 'pages#directory'
  get 'info'    => 'pages#info'
  match '/users',   to: 'users#index',   via: 'get'
  get 'users/:id' => 'users#show', as: :user
  resources :sections
  resources :items
  resources :users, :only => [:show]
end
