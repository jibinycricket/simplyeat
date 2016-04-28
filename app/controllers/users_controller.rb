class UsersController < ApplicationController
  def index
    @users = User.all
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
