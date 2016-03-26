class Item < ActiveRecord::Base
  belongs_to :user
  belongs_to :section

  mount_uploader :item_picture, ItemPictureUploader

  validates :user_id, presence: true
  validates :section_id, presence: true
  validates :name, presence: true
  validates :price, presence: true

end