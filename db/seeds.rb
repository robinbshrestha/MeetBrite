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
    title: 'The Product Group',
    description: 'Help support our Meetup: Contribute (https://secure.meetup.com/TheProductGroup/contribute/) An opportunity for Product Managers, Strategists,etc., to come together to meet, interact, and network. The ideal environment within which sharing and learning can flourish and complement the knowledge base for all on a peer to peer basis. Check out our top partners who make The Product Group possible... • iHeart (https://iheart.com/) - Listen to Free Radio Stations & Music Online • Tafifi (https://tafifi.com/) - The Living Roadmap. Sign up for VIP Access Subscribe to our YouTube channel http://tpg.li/subscribe-tpg and dont miss any of our livestreams.',
    location_id: 1,
    organizer_id: demo.id
)

group2 = Group.create!(
    title: 'NYC Startup Community',
    description: "Are you new to the New York Startup Community? This is an orientation to help newcomers to the startup scene get acquainted with the exciting world of tech in NYC. We'll give you the inside scoop on key events/meetups to attend, companies, VCs, blogs, incubators, and more.",
    location_id: 1,
    organizer_id: demo.id
)

group3 = Group.create!(
    title: 'Cuban Salsa New York',
    description: "For those in NYC who enjoy Cuban Salsa/Timba music and dance (Casino, Son, Rueda de Casino), we host weekly classes in Manhattan & Brooklyn catered to all levels of dancers, weekend dance practice sessions/socials, group outings, live music/concert events, AND legal travel opportunities to Havana, Cuba each summer. We have over 10+ years experience teaching & promoting Cuban dance & music in the NYC area.",
    location_id: 1,
    organizer_id: demo.id
)

group4 = Group.create!(
    title: 'Ghostskate New York City',
    description: "Ghostskate wants to help people realize their dream of skateboarding by providing regular free community events. We help people join the sport by teaching a proven method of the initial stages of skateboarding and holding a regular calendar of events. The events that we host include beginner lessons, distance skates throughout the city, skill clinics, social events and competitions. We empower community members to become leaders by giving them a framework to announce their events, a partner to help host the events, and the proper method to hold an open & accepting event that never leaves a member behind.",
    location_id: 1,
    organizer_id: demo.id
)

group5 = Group.create!(
    title: 'New York Adventure Club',
    description: "We are a community-driven club that curates the most unique experiences in town, with a focus on history and storytelling. We show you a city you never knew existed, and offer a community you can’t live without.

You won’t find our special-access tours and exclusive events anywhere else. Think after-hours tours of New York City’s most celebrated spaces, themed parties in unexpected locations, and weekend excursions to incredible destinations. All of our events end with social hangouts so you can meet people who love exploring as much as you do.",
    location_id: 1,
    organizer_id: demo.id
)

group6 = Group.create!(
    title: 'I like food club',
    description: "What we're about We're enthusiastic open-minded foodies of all ages, who love sampling and sharing cuisines from all over the world. Family-style dining often nets a cheaper and more intriguing experience: a group can try lots of unfamiliar or unusual dishes that you might never have risked a whole meal on. If you delight in exploring ethnic restaurants and will travel most anywhere a NYC Metrocard can take you, you're a potential friend. Many events will be for omnivores, some vegetarian or vegan or veg-friendly, and typically they'll run around $20-$30 per person. (A few places may be AYCE buffets, or better for individual ordering, but most meals will be shared.)",
    location_id: 1,
    organizer_id: demo.id
)

group1.photo.attach(io: open('https://meetbrite-seeds.s3.amazonaws.com/photo3.png'), filename:'photo3.png')
group2.photo.attach(io: open('https://meetbrite-seeds.s3.amazonaws.com/photo4.jpg'), filename:'photo4.jpg')
group3.photo.attach(io: open('https://meetbrite-seeds.s3.amazonaws.com/photo6.jpeg'), filename:'photo6.jpeg')
group4.photo.attach(io: open('https://meetbrite-seeds.s3.amazonaws.com/photo11.jpg'), filename:'photo11.jpg')
group5.photo.attach(io: open('https://meetbrite-seeds.s3.amazonaws.com/photo6.jpeg'), filename:'photo6.jpeg')
group6.photo.attach(io: open('https://meetbrite-seeds.s3.amazonaws.com/photo10.jpg'), filename:'photo10.jpg')
