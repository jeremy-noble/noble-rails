class SeminarTime < ActiveRecord::Base
  attr_accessible :end_date, :seminar_id, :start_date
  belongs_to :seminar
  default_scope :order => 'start_date'
end
