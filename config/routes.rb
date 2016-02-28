Rails.application.routes.draw do
  
  devise_for :users
  root to: 'pages#home'

  get 'pages/menu'

  get 'pages/gallery'

  get 'pages/info'

end
