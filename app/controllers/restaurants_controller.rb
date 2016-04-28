class RestaurantsController < ApplicationController
  def index
    @restaurants = Restaurant.all
  end

  def new
    @restaurant = current_user.build_restaurant
  end

  def create
    @restaurant = current_user.create_restaurant(restaurant_params)
    if @restaurant.save
      flash[:success] = "Restaurant information has been saved"
      if current_user.schedule.nil?
        redirect_to new_schedule_path
      else
        redirect_to user_path(current_user.user_name)
      end
    else
      flash[:alert] = "Restaurant info wasn't saved"
      render :new
    end
  end

  def edit
    @restaurant = current_user.restaurant
  end

  def update
    if current_user.restaurant.update(restaurant_params)
      redirect_to user_path(current_user.user_name)
      flash[:success] = "Restaurant information has been updated"
    else
      redirect_to edit_restaurant_path
      flash[:alert] = "Restaurant information was not updated"
    end
  end


  private
    def restaurant_params
      params.require(:restaurant).permit(:name, :isOpen, :category, :street_number, :street_name, :city, :state, :zip_code, :restaurant_picture, :remove_restaurant_picture, :phone_number, :description, :email, :facebook, :twitter, :instagram)
    end
end
