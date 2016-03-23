class AddContactInfoToRestaurant < ActiveRecord::Migration
  def change
    add_column :restaurants, :phone_number, :string
    add_column :restaurants, :email, :string
    add_column :restaurants, :facebook, :string
    add_column :restaurants, :instagram, :string
    add_column :restaurants, :twitter, :string
  end
end
