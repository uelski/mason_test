class CreateShows < ActiveRecord::Migration
  def change
    create_table :shows do |t|
      t.string :title
      t.string :show_url
      t.string :venue_name
      t.string :venue_link
      t.date :date
      t.string :ticket_url
      t.string :poster_url
      
      t.timestamps null: false
    end
  end
end
