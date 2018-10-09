class ChangeUsersDescriptionNull < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :description, :text, :null => false
  end
end
