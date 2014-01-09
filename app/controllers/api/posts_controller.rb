class Api::PostsController < ApplicationController
  def index
    render :json => Post.all
  end

  def create
    @post = Post.new(params[:post])
    if @post.save
      flash[:notice] = ["post saved"]
      render :json => @post
    else
      flash[:errors] = [@post.errors.full_messages]
      render :json => @post.errors, :status => 422
    end
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    head :ok
  end

  def show
    @post = Post.find(params[:id])
    render :json => @post
  end

end