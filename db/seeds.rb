User.destroy_all
User.reset_sequence_name

User.create!({id: 1, email: 'huangtonyj91@gmail.com', fullname: 'Tony J', username: 'FutureTony', password: 'starwars!', description: '📷 Sony a7rIII'})
User.create!({id: 2, email: 'presenttony@gmail.com', fullname: 'Tony J (Present)', username: 'PresentTony', password: 'starwars!', description: 'Welcome to Kilogram Demo 😃'})
User.create!({id: 3, email: 'pasttony@gmail.com', fullname: 'Tony J (Past)', username: 'PastTony', password: 'starwars!', description: 'Welcome to Kilogram Demo 😃'})
User.create!({id: 4, email: 'fhlin28@gmail.com', fullname: 'Fanny Lin', username: 'fhlin28', password: 'starwars!', description: '💭 Full time Dreamer. 🤓 Part time Techie. 🤸‍♀️ For the Memories. Welcome to my Ordinary Life.'})
User.create!({id: 5, email: 'demo@gmail.com', fullname: 'Demo User', username: 'demo', password: 'starwars', description: 'Welcome to Kilogram Demo 😃'})

Post.destroy_all
Post.reset_sequence_name


a = Post.new({caption: 'Portland Light House', location: 'Portland. ME', author_id: 1})
a.photo.attach(io: File.open('app/assets/images/seed_images/1_6.jpeg'), filename: '1_6.jpeg')
a.save!

a = Post.new({caption: 'Boomer staring into the flames', location: '0', author_id: 1})
a.photo.attach(io: File.open('app/assets/images/seed_images/1_11.jpeg'), filename: '1_11.jpeg')
a.save!

a = Post.new({caption: 'Zoom zoom Blue Angels', location: 'San Francisco, CA', author_id: 2})
a.photo.attach(io: File.open('app/assets/images/seed_images/2_3.jpeg'), filename: '2_3.jpeg')
a.save!

a = Post.new({caption: 'Arches', location: 'Arches National Park', author_id: 5})
a.photo.attach(io: File.open('app/assets/images/seed_images/5_1.jpeg'), filename: '5_1.jpeg')
a.save!

a = Post.new({caption: 'Snowy Firebird jump', location: 'Boston, MA', author_id: 1})
a.photo.attach(io: File.open('app/assets/images/seed_images/1_13.jpeg'), filename: '1_13.jpeg')
a.save!

a = Post.new({caption: 'SF Golden Gate Bridge 🌉', location: 'San Francisco, CA', author_id: 1})
a.photo.attach(io: File.open('app/assets/images/seed_images/1_8.jpeg'), filename: '1_8.jpeg')
a.save!

a = Post.new({caption: 'Look at that!', location: 'Rocky National Park', author_id: 4})
a.photo.attach(io: File.open('app/assets/images/seed_images/4_3.jpeg'), filename: '4_3.jpeg')
a.save!

a = Post.new({caption: 'Boston Night from above', location: 'Boston, MA', author_id: 1})
a.photo.attach(io: File.open('app/assets/images/seed_images/1_9.jpeg'), filename: '1_9.jpeg')
a.save!

a = Post.new({caption: 'Waaaaaaa', location: 'Rocky National Park', author_id: 4})
a.photo.attach(io: File.open('app/assets/images/seed_images/4_2.jpeg'), filename: '4_2.jpeg')
a.save!

a = Post.new({caption: 'B<3ston', location: 'Boston, MA', author_id: 1})
a.photo.attach(io: File.open('app/assets/images/seed_images/1_5.jpeg'), filename: '1_5.jpeg')
a.save!

a = Post.new({caption: 'Peek-a-Boston', location: 'Boston, MA', author_id: 1})
a.photo.attach(io: File.open('app/assets/images/seed_images/1_4.jpeg'), filename: '1_4.jpeg')
a.save!

a = Post.new({caption: 'Make way for the Ducklings', location: 'Boston, MA', author_id: 1})
a.photo.attach(io: File.open('app/assets/images/seed_images/1_14.jpeg'), filename: '1_14.jpeg')
a.save!

a = Post.new({caption: 'Vernazza!', location: 'Cinque Terre, Italy', author_id: 3})
a.photo.attach(io: File.open('app/assets/images/seed_images/3_3.jpeg'), filename: '3_3.jpeg')
a.save!

a = Post.new({caption: 'The U Bend.', location: 'Horseshoe Bend', author_id: 2})
a.photo.attach(io: File.open('app/assets/images/seed_images/2_2.jpeg'), filename: '2_2.jpeg')
a.save!

a = Post.new({caption: 'Boston Sails by the Charles', location: 'Boston, MA', author_id: 1})
a.photo.attach(io: File.open('app/assets/images/seed_images/1_1.jpeg'), filename: '1_1.jpeg')
a.save!

a = Post.new({caption: 'Swinging away', location: 'San Francisco, CA', author_id: 4})
a.photo.attach(io: File.open('app/assets/images/seed_images/4_4.jpeg'), filename: '4_4.jpeg')
a.save!

a = Post.new({caption: 'Weeeeee', location: 'Amsterdam. Netherlands', author_id: 4})
a.photo.attach(io: File.open('app/assets/images/seed_images/4_1.jpeg'), filename: '4_1.jpeg')
a.save!

a = Post.new({caption: 'Hidden path', location: 'Cinque Terre, Italy', author_id: 4})
a.photo.attach(io: File.open('app/assets/images/seed_images/4_5.jpeg'), filename: '4_5.jpeg')
a.save!

a = Post.new({caption: 'Boston from BU', location: 'Boston, MA', author_id: 3})
a.photo.attach(io: File.open('app/assets/images/seed_images/3_1.jpeg'), filename: '3_1.jpeg')
a.save!

a = Post.new({caption: 'Vivid coastal village', location: 'Cinque Terre, Italy', author_id: 1})
a.photo.attach(io: File.open('app/assets/images/seed_images/1_15.jpeg'), filename: '1_15.jpeg')
a.save!

a = Post.new({caption: 'iAmsterdam', location: 'Amsterdam. Netherlands', author_id: 1})
a.photo.attach(io: File.open('app/assets/images/seed_images/1_3.jpeg'), filename: '1_3.jpeg')
a.save!

a = Post.new({caption: 'Zion Overlook', location: 'Zion National Park', author_id: 1})
a.photo.attach(io: File.open('app/assets/images/seed_images/1_10.jpeg'), filename: '1_10.jpeg')
a.save!

a = Post.new({caption: 'Bottle from Amsterdam', location: 'Amsterdam. Netherlands', author_id: 1})
a.photo.attach(io: File.open('app/assets/images/seed_images/1_2.jpeg'), filename: '1_2.jpeg')
a.save!

a = Post.new({caption: 'Boston from Longsfellow', location: 'Boston, MA', author_id: 1})
a.photo.attach(io: File.open('app/assets/images/seed_images/1_7.jpeg'), filename: '1_7.jpeg')
a.save!

a = Post.new({caption: 'Lets pool', location: '0', author_id: 2})
a.photo.attach(io: File.open('app/assets/images/seed_images/2_1.jpeg'), filename: '2_1.jpeg')
a.save!

a = Post.new({caption: 'Starry light bulb', location: '0', author_id: 1})
a.photo.attach(io: File.open('app/assets/images/seed_images/1_12.jpeg'), filename: '1_12.jpeg')
a.save!

a = Post.new({caption: 'Merry Christmas', location: '0', author_id: 3})
a.photo.attach(io: File.open('app/assets/images/seed_images/3_2.jpeg'), filename: '3_2.jpeg')
a.save!

a = Post.new({caption: 'Graffiti Boston', location: 'Boston, MA', author_id: 5})
a.photo.attach(io: File.open('app/assets/images/seed_images/5_2.jpeg'), filename: '5_2.jpeg')
a.save!



Follow.destroy_all
Follow.reset_sequence_name

Follow.create!({	follower_id:	1	,	followee_id:	1	})
Follow.create!({	follower_id:	2	,	followee_id:	2	})
Follow.create!({	follower_id:	3	,	followee_id:	3	})
Follow.create!({	follower_id:	4	,	followee_id:	4	})
Follow.create!({	follower_id:	5	,	followee_id:	5	})
						
Follow.create!({	follower_id:	1	,	followee_id:	2	})
Follow.create!({	follower_id:	1	,	followee_id:	3	})
Follow.create!({	follower_id:	1	,	followee_id:	4	})
Follow.create!({	follower_id:	1	,	followee_id:	5	})
						
Follow.create!({	follower_id:	2	,	followee_id:	1	})
Follow.create!({	follower_id:	3	,	followee_id:	1	})
Follow.create!({	follower_id:	4	,	followee_id:	1	})
Follow.create!({	follower_id:	5	,	followee_id:	1	})



Like.destroy_all						
Like.reset_sequence_name						
						
Like.create!({	post_id:	18	,	user_id:	1	})
Like.create!({	post_id:	20	,	user_id:	5	})
Like.create!({	post_id:	2	,	user_id:	3	})
Like.create!({	post_id:	27	,	user_id:	2	})
Like.create!({	post_id:	10	,	user_id:	5	})
Like.create!({	post_id:	11	,	user_id:	3	})
Like.create!({	post_id:	18	,	user_id:	5	})
Like.create!({	post_id:	19	,	user_id:	3	})
Like.create!({	post_id:	5	,	user_id:	3	})
Like.create!({	post_id:	3	,	user_id:	5	})
Like.create!({	post_id:	28	,	user_id:	5	})
Like.create!({	post_id:	24	,	user_id:	4	})
Like.create!({	post_id:	6	,	user_id:	3	})
Like.create!({	post_id:	1		user_id:	5	})
Like.create!({	post_id:	13		user_id:	3	})
Like.create!({	post_id:	3		user_id:	2	})
Like.create!({	post_id:	16		user_id:	4	})
Like.create!({	post_id:	25		user_id:	4	})
Like.create!({	post_id:	8		user_id:	5	})
Like.create!({	post_id:	3		user_id:	1	})
Like.create!({	post_id:	24		user_id:	3	})
Like.create!({	post_id:	27		user_id:	5	})
Like.create!({	post_id:	13		user_id:	1	})
Like.create!({	post_id:	26		user_id:	4	})
Like.create!({	post_id:	18		user_id:	4	})
Like.create!({	post_id:	10		user_id:	2	})
Like.create!({	post_id:	2		user_id:	1	})
Like.create!({	post_id:	14		user_id:	5	})
Like.create!({	post_id:	2		user_id:	4	})
Like.create!({	post_id:	7		user_id:	5	})



Comment.destroy_all
Comment.reset_sequence_name

Comment.create!({post_id: 1, parent_comment_id: , author_id: 4, comment: 'That lighthouse!'})
Comment.create!({post_id: 2, parent_comment_id: , author_id: 5, comment: 'Cute doggie'})
Comment.create!({post_id: 4, parent_comment_id: , author_id: 3, comment: 'Wow, that arch is huge!'})
Comment.create!({post_id: 4, parent_comment_id: , author_id: 1, comment: 'Nice blue skies!'})
Comment.create!({post_id: 5, parent_comment_id: , author_id: 3, comment: 'Omg! That jump in the snow!'})
Comment.create!({post_id: 6, parent_comment_id: , author_id: 3, comment: 'Magestic!'})
Comment.create!({post_id: 6, parent_comment_id: , author_id: 3, comment: 'Great shot!!'})
Comment.create!({post_id: 8, parent_comment_id: , author_id: 4, comment: 'Wow, look at those light streaks'})
Comment.create!({post_id: 10, parent_comment_id: , author_id: 2, comment: '<3 Boston'})
Comment.create!({post_id: 11, parent_comment_id: , author_id: 3, comment: 'Ooooo Boston'})
Comment.create!({post_id: 12, parent_comment_id: , author_id: 3, comment: 'Quack quack'})
Comment.create!({post_id: 14, parent_comment_id: , author_id: 2, comment: 'Horseshoeeeee'})
Comment.create!({post_id: 15, parent_comment_id: , author_id: 2, comment: 'Great shot!!'})
Comment.create!({post_id: 15, parent_comment_id: , author_id: 3, comment: 'Wow!'})
Comment.create!({post_id: 16, parent_comment_id: , author_id: 4, comment: 'Weeeeeeee'})
Comment.create!({post_id: 17, parent_comment_id: , author_id: 3, comment: '<3 <3'})
Comment.create!({post_id: 18, parent_comment_id: , author_id: 3, comment: 'Wow, where is this?'})
Comment.create!({post_id: 19, parent_comment_id: , author_id: 3, comment: 'Awesome shot!'})
Comment.create!({post_id: 20, parent_comment_id: , author_id: 5, comment: 'Those colors are unreal!'})
Comment.create!({post_id: 20, parent_comment_id: , author_id: 4, comment: 'Wow!!'})
Comment.create!({post_id: 21, parent_comment_id: , author_id: 3, comment: 'Amsterdam :D'})
Comment.create!({post_id: 22, parent_comment_id: , author_id: 3, comment: 'Nice shot!'})
Comment.create!({post_id: 22, parent_comment_id: , author_id: 5, comment: 'Woahhh'})
Comment.create!({post_id: 22, parent_comment_id: , author_id: 1, comment: 'That is awesome!'})
Comment.create!({post_id: 23, parent_comment_id: , author_id: 1, comment: 'Gulp gulp'})
Comment.create!({post_id: 24, parent_comment_id: , author_id: 4, comment: 'Wow, another great shot!'})
Comment.create!({post_id: 24, parent_comment_id: , author_id: 5, comment: 'Great post!'})
Comment.create!({post_id: 25, parent_comment_id: , author_id: 1, comment: 'Lets play!'})
Comment.create!({post_id: 25, parent_comment_id: , author_id: 5, comment: '8-ball'})
Comment.create!({post_id: 26, parent_comment_id: , author_id: 4, comment: '💡 💡 💡 '})
Comment.create!({post_id: 26, parent_comment_id: , author_id: 4, comment: 'Nice bokeh!!'})
Comment.create!({post_id: 27, parent_comment_id: , author_id: 4, comment: 'Merry xmas!'})
Comment.create!({post_id: 28, parent_comment_id: , author_id: 2, comment: 'Woah, where is this?'})