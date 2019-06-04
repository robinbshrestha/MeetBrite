class CreateGroups < ActiveRecord::Migration[5.2]
  def change
    create_table :groups do |t|
      t.integer :organizer_id, null: false
      t.integer :location_id, null: false
      t.string :title, null: false
      t.string :description, null: false

      t.timestamps
    end
    add_index :groups, :organizer_id
    add_index :groups, :location_id
  end
end
