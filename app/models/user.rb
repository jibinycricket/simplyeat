class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  has_many :sections, dependent: :destroy
  has_many :items, dependent: :destroy
  has_one  :restaurant, dependent: :destroy
  has_one  :schedule, dependent: :destroy

  validates :user_name, presence: true, length: {minimum: 4, maximum: 16}
end
