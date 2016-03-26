class Restaurant < ActiveRecord::Base
  belongs_to :user
  mount_uploader :restaurant_picture, RestaurantPictureUploader
  validates :name, presence: true
  validates :user_id, presence: true
end
