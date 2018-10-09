class ChangeUsersDescriptionNull2 < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :description, :text, :null => true
  end
end
