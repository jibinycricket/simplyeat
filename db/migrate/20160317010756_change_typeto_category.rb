class ChangeTypetoCategory < ActiveRecord::Migration
  def change
    rename_column :restaurants, :type, :category
  end
end
