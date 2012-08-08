class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.integer :course_id
      t.integer :session_id

      t.timestamps
    end
  end
end
