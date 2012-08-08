class Course < ActiveRecord::Base
  attr_accessible :name

  has_many :events
  has_many :sessions, :through => :events
end
