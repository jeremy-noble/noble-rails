class CreateCategoriesCoursesTable < ActiveRecord::Migration
  def self.up
    create_table :categories_courses, :id => false do |t|
      t.integer :category_id
      t.integer :course_id
    end
  end

  def self.down
    drop_table :categories_courses
  end
end
