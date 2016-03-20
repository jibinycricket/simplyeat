class Section < ActiveRecord::Base
  belongs_to :user
  has_many :items, dependent: :destroy
  validates :name, presence: true
  validates :user_id, presence: true
  default_scope{ order('created_at ASC')}
end
