class ItemsController < ApplicationController
  before_action :authenticate_user!
  before_action :correct_user, only: [:edit, :update, :destroy]
  before_action :set_item, only: [:destroy, :edit, :update]

  def new
    @item = current_user.items.build
  end

  def create
    @item = current_user.items.build(item_params)
    respond_to do |format|
      if @item.save
        format.html{
          flash[:success] = "Your item has been created!"
          redirect_to current_user
        }
        format.js
      else
        format.html{
          flash[:alert] = "Your new item wasnt created"
          render :new
        }
        format.js
      end
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
    respond_to do |format|
      if @item.update(item_params)
        format.html{redirect_to current_user}
        format.js
      else
        format.html{render :edit}
        format.js
      end
    end
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
