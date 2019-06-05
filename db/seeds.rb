# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'
User.destroy_all
Group.destroy_all

demo = User.create!(name: 'Demo', email: 'demo@gmail.com', password: 'demo12345', location_id: 1)

group1 = Group.create!(
    title: 'NYC Python Coding Group',
    description: 'Learn Python!',
    location_id: 1,
    organizer_id: demo.id
)

group2 = Group.create!(
    title: 'NYC Python Coding Group',
    description: 'Learn Python!',
    location_id: 1,
    organizer_id: demo.id
)

group3 = Group.create!(
    title: 'NYC Python Coding Group',
    description: 'Learn Python!',
    location_id: 1,
    organizer_id: demo.id
)

group4 = Group.create!(
    title: 'NYC Python Coding Group',
    description: 'Learn Python!',
    location_id: 1,
    organizer_id: demo.id
)

group5 = Group.create!(
    title: 'NYC Python Coding Group',
    description: 'Learn Python!',
    location_id: 1,
    organizer_id: demo.id
)

group6 = Group.create!(
    title: 'NYC Python Coding Group',
    description: 'Learn Python!',
    location_id: 1,
    organizer_id: demo.id
)

group1.photo.attach(io: open('https://meetbrite-seeds.s3.amazonaws.com/photo2.jpg'), filename:'photo2.jpg')
group2.photo.attach(io: open('https://meetbrite-seeds.s3.amazonaws.com/photo2.jpg'), filename:'photo2.jpg')
group3.photo.attach(io: open('https://meetbrite-seeds.s3.amazonaws.com/photo2.jpg'), filename:'photo2.jpg')
group4.photo.attach(io: open('https://meetbrite-seeds.s3.amazonaws.com/photo2.jpg'), filename:'photo2.jpg')
group5.photo.attach(io: open('https://meetbrite-seeds.s3.amazonaws.com/photo2.jpg'), filename:'photo2.jpg')
group6.photo.attach(io: open('https://meetbrite-seeds.s3.amazonaws.com/photo2.jpg'), filename:'photo2.jpg')
