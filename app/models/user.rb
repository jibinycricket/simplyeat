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
  validates_uniqueness_of :user_name

  if Rails.env.development?
    def self.search(search)
      if search
        q = "%#{search}%"

        joins(:restaurant).where("users.user_name LIKE ? OR 
                                 restaurants.name LIKE ? OR
                                 restaurants.category LIKE ? OR
                                 restaurants.zip_code LIKE ? OR
                                 restaurants.state LIKE ? OR
                                 restaurants.city LIKE ?",q, q, q, q, q, q)
      end
    end
  end
  if Rails.env.production?
    def self.search(search)
      if search
        q = "%#{search}%"

        joins(:restaurant).where("users.user_name ILIKE ? OR 
                                 restaurants.name ILIKE ? OR
                                 restaurants.category ILIKE ? OR
                                 restaurants.zip_code ILIKE ? OR
                                 restaurants.state ILIKE ? OR
                                 restaurants.city ILIKE ?",q, q, q, q, q, q)
      end
    end
  end
end
