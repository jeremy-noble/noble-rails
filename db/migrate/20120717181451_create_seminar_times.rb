class CreateSeminarTimes < ActiveRecord::Migration
  def change
    create_table :seminar_times do |t|
      t.datetime :start_date
      t.datetime :end_date
      t.integer :seminar_id

      t.timestamps
    end
  end
end
