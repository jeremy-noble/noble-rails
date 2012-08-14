class Course < ActiveRecord::Base
  attr_accessible :name

  has_many :events, :dependent => :destroy
  has_and_belongs_to_many :categories
end
