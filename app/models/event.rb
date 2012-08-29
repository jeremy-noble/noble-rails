class Event < ActiveRecord::Base
  attr_accessible :course_id, :course_name, :course_id, :category_ids

  belongs_to :course
  has_many :sessions, :dependent => :destroy
  has_many :registrations
  has_many :users, through: :registrations
  has_and_belongs_to_many :categories

  validates :course_id, presence: true

  def course_name
    self.course.name if self.course
  end

  def course_name=(str)
    self.course = Course.find_or_create_by_name(str.strip) if str.present?    
  end

  def start_time
    self.sessions.first.start_time if self.sessions
  end

  def end_time
    self.sessions.last.end_time if self.sessions
  end

  #why doesn't this work? stack level too deep?
  # def self.destroy_event_if_has_no_sessions(session)
  #   event = self.find(session.event_id)
  #   if event.sessions.count == 1
  #     event.destroy
  #   end
  # end

end
