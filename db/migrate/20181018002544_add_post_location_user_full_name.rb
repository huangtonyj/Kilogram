class AddPostLocationUserFullName < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :fullname, :string
    add_column :posts, :location, :string
    remove_column :posts, :location_id
  end
end
