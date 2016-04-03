class AddCityAndDescriptionToRestaurant < ActiveRecord::Migration
  def change
    add_column :restaurants, :city, :string
    add_column :restaurants, :description, :text
  end
end
