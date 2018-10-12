import React from 'react';
// import PostIndexItem from './post_index_item';

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

  // componentWillReceiveProps

  render() {

    if (!this.props.user) { return null; }

    console.log(this.props);
    return (
      <div>
        <h1> this is user show</h1>
        <p>{this.props.user.username}</p>
      </div>
    )
  }
}

export default UserShow;