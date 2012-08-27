class Session < ActiveRecord::Base
  attr_accessible :event_id, :start_time, :end_time, :course_name
  belongs_to :event

  validates :event_id, presence: true
  validates :start_time, presence: true
  validates :end_time, presence: true

  default_scope :order => 'start_time, event_id'

  def course_name
    self.event.course.name if self.event.course
  end

  def course_name=(str)
    self.event.course = Course.find_or_create_by_name(str.strip) if str.present?    
  end

  # DOESN'T WORK??!? augh
  # before_destroy event.destroy_event_if_has_no_sessions

end
