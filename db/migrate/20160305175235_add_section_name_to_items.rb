class AddSectionNameToItems < ActiveRecord::Migration
  def change
    add_column :items, :section_name, :string
  end
end
