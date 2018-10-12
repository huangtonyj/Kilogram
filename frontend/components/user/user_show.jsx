import React from 'react';
import UserShowPostIndex from './user_show_post_index';

class UserShow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  componentDidMount() {
    this.props.getUser(this.props.match.params.userId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.userId !== nextProps.match.params.userId) {
      this.props.getUser(nextProps.match.params.userId);
    }
  }

  render() {

    if (!this.props.user) { return null; }

    return (
      <div>
        <h1>{this.props.user.username}</h1>
        <p>{this.props.user.description}</p>

        <UserShowPostIndex
          posts={this.props.posts} />

      </div>
    )
  }
}

export default UserShow;