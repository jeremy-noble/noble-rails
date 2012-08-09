class Event < ActiveRecord::Base
  attr_accessible :course_id

  belongs_to :course
  has_many :sessions, :dependent => :destroy

  validates :course_id, presence: true


end
