class Seminar < ActiveRecord::Base
  attr_accessible :name
  has_many :seminar_times, :dependent => :destroy
end
