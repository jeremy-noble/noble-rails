module Shared
  def self.category_group_by_day(categories_array)
    events = Event.joins(:sessions, :categories).
      where(:categories => {:name => categories_array}).
      where("date(start_time) > ?", DateTime.now)

    events.sort_by! { |e| e.start_time }
    event_days = events.group_by { |e| [e.start_time.beginning_of_day, e.course_id] }
  end
end
 