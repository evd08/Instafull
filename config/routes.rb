Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  namespace :api, defaults: { format: :json } do 
    resources :users, only:[:create, :new, :index, :update]

    resources :users, only:[:show] do 
      resources :posts, only:[:index]
    end

    resources :likes, only:[:index, :show, :create, :destroy]
    resources :comments, only:[:index, :show, :create, :destroy]
    resources :posts, except:[:new, :edit, :index]
    resource :session, only:[:create, :destroy]
  end

  root to: 'static_pages#root'
end
