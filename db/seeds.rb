# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.create!(
  username: 'FutureTony',
  email: 'huangtonyj91@gmail.com',
  password: 'starwars',
  description: 'a7riii'
)

User.create!(
  username: 'demo',
  email: 'a@b.c',
  password: 'starwars',
  description: 'Welcome to the Kilogram demo'
)

Post.create!(
  author_id: 1,
  caption: "SF Golden Gate Bridge"
)