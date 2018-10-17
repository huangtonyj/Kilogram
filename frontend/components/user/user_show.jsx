import React from 'react';
import UserShowPostIndex from './user_show_post_index';

class UserShow extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      user: null
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

    if (!this.props.user.description) { return null; }

    // debugger

    const followButton = () => (
      !!(this.props.user.followees[this.props.match.params.userId]) ? (
        <button
          onClick={this.handleUnfollow}>
          {'Unfollow'}
        </button>
      ) : (
          <button
            onClick={this.handleFollow}>
            {'Follow'}
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

              {followButton()}


            </div>

            <div className='user-show-profile-info-B'>
              <span><b>152</b> posts</span>
              <span><b>200</b> followers</span>
              <span><b>265</b> following</span>
            </div>

            <div className='user-show-profile-info-C'>
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