class Item < ActiveRecord::Base
  belongs_to :user
  
  validates :user_id, presence: true
  validates :name, presence: true, uniqueness: true
  validates :price, presence: true
  validates :section_name, presence: true

end