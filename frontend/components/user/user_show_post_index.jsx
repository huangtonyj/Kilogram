import React from 'react';

import UserShowPostIndexItem from './user_show_post_index_item';

class UserShowPostIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    const userShowPostIndexItem = this.props.posts
      .map(post => (
        <UserShowPostIndexItem
          key={post.id}
          post={post}
          getPost={this.props.getPost}
          openModal={this.props.openModal}
          closeModal={this.props.closeModal}
        />
      ))
      .reverse();

    return (
      <div className='user-show-profile-posts'>
        <ul>
          {userShowPostIndexItem}
        </ul>
      </div>
    );
  }
}

export default UserShowPostIndex;