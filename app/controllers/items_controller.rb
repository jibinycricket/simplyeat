class ItemsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_item, only: [:destroy, :edit, :update]

  def new
    @item = current_user.items.build
  end

  def create
    @item = current_user.items.build(item_params)
    if @item.save
      flash[:success] = "Your item has been created!"
      redirect_to current_user
    else
      flash[:alert] = "Your new item wasnt created"
      render :new
    end
  end

  def destroy
    @item.destroy
    flash[:success] = "Item was deleted"
    redirect_to current_user 
  end

  def edit
  end

  def update
    @item.update(item_params)
    redirect_to current_user
  end

  
  private
    def set_item
      @item = Item.find(params[:id])
    end

    def correct_user
      set_item
      unless current_user == @item.user
        flash[:alert] = "You don't have access"
        redirect_to root_path
      end
    end

    def item_params
      params.require(:item).permit(:name, :price, :ingredients, :description, :section_name)
    end
end
