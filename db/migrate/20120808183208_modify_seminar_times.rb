class ModifySeminarTimes < ActiveRecord::Migration
  def change
    remove_column :seminar_times, :seminar_id
    add_column :seminar_times, :event_id, :integer
  end
end
