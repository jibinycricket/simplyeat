class Item < ActiveRecord::Base
  belongs_to :user
  belongs_to :section

  validates :user_id, presence: true
  validates :section_id, presence: true
  validates :name, presence: true, uniqueness: true
  validates :price, presence: true

end