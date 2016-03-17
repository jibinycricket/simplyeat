class CreateRestaurants < ActiveRecord::Migration
  def change
    create_table :restaurants do |t|
      t.string :name
      t.boolean :isOpen
      t.string :type
      t.integer :street_number
      t.string :street_name
      t.string :state
      t.integer :zip_code

      t.timestamps null: false
    end
  end
end
