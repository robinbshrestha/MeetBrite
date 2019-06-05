# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

demo = User.create!(name: 'Demo', email: 'demo@gmail.com', password: 'demo12345', location_id: 1)

group1 = Group.create!(
    title: 'NYC Python Coding Group',
    description: 'Learn Python!',
    location_id: 1,
    creator_id: demo.id
)
