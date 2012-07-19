class User < ActiveRecord::Base
  attr_accessible :email, :first_name, :last_name
  before_save { |user| user.email = email.downcase }
  validates :first_name, :presence => true, length: { maximum: 80 }
  validates :last_name, :presence => true, length: { maximum: 80 } 
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :email, presence: true, format: { with: VALID_EMAIL_REGEX }, uniqueness: { case_sensitive: false }
end
