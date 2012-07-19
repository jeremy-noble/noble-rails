class CreateSeminarRegistrations < ActiveRecord::Migration
  def change
    create_table :seminar_registrations do |t|
      t.integer :user_id
      t.integer :seminar_time_id

      t.timestamps
    end
  end
end
