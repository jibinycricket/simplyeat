Rails.application.routes.draw do
  
  devise_for :users
  root to: 'pages#home'
  get 'menu'    => 'pages#menu'
  get 'gallery' => 'pages#gallery'
  get 'info'    => 'pages#info'
  
  resources :sections
  resources :items
end
