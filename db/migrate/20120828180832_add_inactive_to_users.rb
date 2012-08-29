class AddInactiveToUsers < ActiveRecord::Migration
  def change
    add_column :users, :inactive, :boolean, :null => false, :default => false
  end
end
