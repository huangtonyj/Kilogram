import React from 'react';
import UserShowPostIndex from './user_show_post_index';

class UserShow extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      user: null,
    };

    this.handleFollow = this.handleFollow.bind(this);
    this.handleUnfollow = this.handleUnfollow.bind(this);
  }

  componentDidMount() {
    this.props.getUser(this.props.match.params.userId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.userId !== nextProps.match.params.userId) {
      this.props.getUser(nextProps.match.params.userId);
    }
  }

  handleFollow() {
    this.props.postFollow(this.props.match.params.userId);
  }

  handleUnfollow() {
    this.props.deleteFollow(this.props.match.params.userId);
  }


  render() {

    if (!this.props.user) { return null; }

    let followButton = (
      (this.props.currentUser.followees[this.props.match.params.userId]) ? (
        <button
          onClick={this.handleUnfollow}
          disabled={this.props.currentUser.id == this.props.match.params.userId}
        >
          Unfollow
        </button>
      ) : (
          <button
            onClick={this.handleFollow}
          >
            Follow
          </button>
        )
    );

    return (
      <div className='user-show-profile'>
        <div className='user-show-profile-header'>

          <div className='user-show-avatar-container'>
            <div className='user-show-avatar'>

            </div>
          </div>

          <div className='user-show-profile-info'>
            <div className='user-show-profile-info-A'>
              <p className='user-show-username'>{this.props.user.username}</p>

              {followButton}

            </div>

            <div className='user-show-profile-info-B'>
              <span><b>{Object.values(this.props.posts).filter((post) => post.authorId == this.props.match.params.userId).length}</b> posts</span>
              <span><b>{Object.values(this.props.user.followers).filter(Boolean).length}</b> followers</span>
              <span><b>{Object.values(this.props.user.followees).filter(Boolean).length}</b> following</span>
            </div>

            <div className='user-show-profile-info-C'>
              <p>{this.props.user.fullname}</p><br />
              <p>{this.props.user.description}</p>
            </div>


          </div>
        </div>

        <UserShowPostIndex
          posts={this.props.posts} />
      </div>
    );
  }
}

export default UserShow;