class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.integer :author_id, null: false
      t.text :caption
      t.integer :location_id

      t.timestamps
    end

    add_index :posts, :author_id
    add_index :posts, :location_id
  end
end
