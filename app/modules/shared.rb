module Shared
  def self.category_group_by_day(arr)
    event_name_to_find = arr

    events = Event.joins(:sessions, :categories).
      where("categories.name = ?", event_name_to_find).
      where("date(start_time) > ?", DateTime.now)
    events.sort_by! { |e| e.start_time }
    event_days = events.group_by { |e| [e.start_time.beginning_of_day, e.course_id] }
  end
end
 