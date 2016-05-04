class ChangeZipCodeFormatToString < ActiveRecord::Migration
  def change
    change_column :restaurants, :zip_code, :string
  end
end
