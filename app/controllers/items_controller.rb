class ItemsController < ApplicationController
  before_action :authenticate_user!

  def new
    @item = current_user.items.build
  end

  def create
    @item = current_user.items.build(item_params)
    if @item.save
      flash[:success] = "Your item has been created!"
      redirect_to root_url
    else
      flash[:alert] = "Your new item wasnt created"
      render :new
    end
  end
  
  private

    def item_params
      params.require(:item).permit(:name, :price, :ingredients, :description, :section_name)
    end
end
