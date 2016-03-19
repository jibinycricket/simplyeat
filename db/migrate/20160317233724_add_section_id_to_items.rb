class AddSectionIdToItems < ActiveRecord::Migration
  def change
    add_reference :items, :section, index: true, foreign_key: true
  end
end
