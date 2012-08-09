class Session < ActiveRecord::Base
  attr_accessible :event_id, :start_time, :end_time
  belongs_to :event

  validates :event_id, presence: true
  validates :start_time, presence: true
  validates :end_time, presence: true

  default_scope :order => 'start_time, event_id'

  

end
