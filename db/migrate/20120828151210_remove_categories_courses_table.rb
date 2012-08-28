class RemoveCategoriesCoursesTable < ActiveRecord::Migration
  def up
    drop_table :categories_courses
  end

  def down
    create_table :categories_courses, :id => false do |t|
      t.integer :category_id
      t.integer :course_id
    end
  end
end
