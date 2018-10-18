# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.create!(
  email: 'huangtonyj91@gmail.com',
  fullname: 'Tony Huang'
  username: 'FutureTony',
  password: 'starwars',
  description: '📷  a7riii'
)

User.create!(
  email: 'demoUser@b.c',
  fullname: 'Demo User'
  username: 'demo',
  password: 'starwars',
  description: 'Welcome to the Kilogram Demo'
)

# Post.create!(
#   author_id: 1,
#   caption: "SF Golden Gate Bridge",
#   location: 'San Francisco'
# )

# Post.create!(
#   author_id: 2,
#   caption: "Boston",
#   location: 'Boston'
# )