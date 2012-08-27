class Category < ActiveRecord::Base
  attr_accessible :name

  has_and_belongs_to_many :courses
  # this should really be associated with event in a singular way

  has_many :events

end
