class Section < ActiveRecord::Base
  belongs_to :user
  has_many :items, dependent: :destroy
  
  validates :user_id, presence: true
  default_scope{ order('created_at ASC')}
end
