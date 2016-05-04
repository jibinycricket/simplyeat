class UsersController < ApplicationController
  def index
    @users = User.paginate(:page => params[:page], :per_page => 10)
    if params[:search]
      @users = User.search(params[:search]).order("created_at DESC").paginate(:page => params[:page], :per_page => 10)
    else
      @users = User.all.order("created_at DESC").paginate(:page => params[:page], :per_page => 10)
    end
  end

  def show
    #@user = User.find(params[:id])
    @user = User.find_by(user_name: params[:user_name])
    @sections = @user.sections
    @items = @user.items
    @restaurant = @user.restaurant;
    @schedule = @user.schedule;
  end
end
