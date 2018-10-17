import React from 'react';

import UserShowPostIndexItem from './user_show_post_index_item';

class UserShowPostIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // loading: true
    };
  }

  componentDidMount() {
    // this.setState({ loading: false });
  }

  render() {

    // if (this.state.loading) return <h3>loading...</h3>;

    const userShowPostIndexItem = (
      this.props.posts.map((post) =>
        <UserShowPostIndexItem
          key={post.id}
          post={post}
        />
      ).reverse()
    );

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