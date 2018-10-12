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

  render() {
    console.log(this.props);
    return (
      <div>
        <h1> this is user show</h1>
        {/* <p>{this.props.users[this.props.match.params.userId].username}</p> */}
      </div>
    )
  }
}

export default UserShow;