User.destroy_all
User.reset_sequence_name

User.create!({id: 1, email: 'huangtonyj91@gmail.com', fullname: 'Tony J', username: 'FutureTony', password: 'starwars!', description: '📷 Sony a7rIII'})
User.create!({id: 2, email: 'presenttony@gmail.com', fullname: 'Tony J (Present)', username: 'PresentTony', password: 'starwars!', description: 'Welcome to Kilogram Demo 😃'})
User.create!({id: 3, email: 'pasttony@gmail.com', fullname: 'Tony J (Past)', username: 'PastTony', password: 'starwars!', description: 'Welcome to Kilogram Demo 😃'})
User.create!({id: 4, email: 'fhlin28@gmail.com', fullname: 'Fanny Lin', username: 'fhlin28', password: 'starwars!', description: '💭 Full time Dreamer. 🤓 Part time Techie. 🤸‍♀️ For the Memories. Welcome to my Ordinary Life.'})
User.create!({id: 5, email: 'demo@gmail.com', fullname: 'Demo User', username: 'demo', password: 'starwars', description: 'Welcome to Kilogram Demo 😃'})

Post.destroy_all
Post.reset_sequence_name

a = Post.new({caption:'Boston, by the Longsfellow', location: 'Boston, MA', author_id: 1})
a.photo.attach(io: File.open('app/assets/images/seed_images/_DSC4074.jpeg'), filename: '_DSC4074.jpeg')
a.save!

a = Post.new({caption:'Zion National Park overlook', location: 'Zion National Park', author_id: 2})
a.photo.attach(io: File.open('app/assets/images/seed_images/_DSC4306.jpeg'), filename: '_DSC4306.jpeg')
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