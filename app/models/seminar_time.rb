class SeminarTime < ActiveRecord::Base
  attr_accessible :end_date, :seminar_id, :start_date
  belongs_to :seminar, :foreign_key => 'seminar_id'
end
