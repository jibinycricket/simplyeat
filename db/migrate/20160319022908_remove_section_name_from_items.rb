class RemoveSectionNameFromItems < ActiveRecord::Migration
  def change
    remove_column :items, :section_name, :string
  end
end
