class SeminarRegistration < ActiveRecord::Base
  attr_accessible :seminar_time_id, :user_id
  belongs_to :user
  belongs_to :seminar_time
end
