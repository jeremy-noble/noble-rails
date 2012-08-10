class Event < ActiveRecord::Base
  attr_accessible :course_id

  belongs_to :course
  has_many :sessions, :dependent => :destroy

  validates :course_id, presence: true

  #why doesn't this work? stack level too deep?
  # def self.destroy_event_if_has_no_sessions(session)
  #   event = self.find(session.event_id)
  #   if event.sessions.count == 1
  #     event.destroy
  #   end
  # end

end
