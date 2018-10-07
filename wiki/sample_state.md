# Sample State

```js
{
  entities: {
    users: {
      1: {
        id: 1,
        username: 'futuretony'
        description: '📷 Sony a7rIII'
      }
      2: {
        id: 2,
        username: 'fhlin28'
        description: '💭 Full time Dreamer. 🤓 Part time Techie. 🤸‍♀️ For the Memories. Welcome to my Ordinary Life.'
      }
    },
    posts: {
      1: {
        id: 1,
        author_id: 1,
        img_url: 'www.aws.com',
        location_id: '1',
        created_at: 201810040042
      },
      2: {
        id: 2,
        author_id: 1,
        img_url: 'www.aws.com',
        location_id: '2',
        created_at: 201810040043
      },
      3: {
        id: 3,
        author_id: 2,
        img_url: 'www.aws.com',
        location_id: '1',
        created_at: 201810040044
      },
      4: {
        id: 4,
        author_id: 2,
        img_url: 'www.aws.com',
        location_id: '3',
        created_at: 201810040045
      }
    },
    comments: {
      1: {
        id: 1,
        post_id: 1,
        parent_comment_id: ,
        author_id: 2,
        comment: 'awesome picture!'
        created_at: 201810040046
      } 
    },
    likes: {
      1: {
        id: 1,
        post_id: 1,
        user_id: 2
      },
      2: {
        id: 2,
        post_id: 3,
        user_id: 1
      }
    },
    follows: {
      1: {
        id: 1,
        follower_id: 1,
        followe2_id: 2,
      },
      2: {
        id: 2,
        follower_id: 2,
        followe2_id: 1,
      }
    },
    tags: {
      1: {
        id: 1,
        tag: 'HashTag'
      }
    },
    locations: {
      1: {
        id: 1,
        location: 'Boston'
      },
      2: {
        id: 2,
        location: 'San Francisco'
      }
    }
  },
  ui: {
    loading: true/false
  },
  errors: {
    login: ["Invalid login credentials"],
    commentForm: ["Comment cannot be blank"]
  },
  session: {
    currentUserId: 1
  }
}
```