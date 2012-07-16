class CreateSeminars < ActiveRecord::Migration
  def change
    create_table :seminars do |t|
      t.string :name

      t.timestamps
    end
  end
end
