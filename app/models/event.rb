class Event < ActiveRecord::Base
  attr_accessible :course_id

  has_many :sessions
end
