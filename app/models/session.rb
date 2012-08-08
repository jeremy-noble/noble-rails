class Session < ActiveRecord::Base
  attr_accessible :end_time, :event_id, :start_time

  belongs_to :event
end
