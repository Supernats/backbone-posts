JournalApp::Application.routes.draw do
  namespace :api do
    resources :posts
  end

  root :to => "static_pages#index"
end
