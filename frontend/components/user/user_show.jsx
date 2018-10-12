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
    this.props.getUser(this.props.userId);
    console.log(this.props);
  }

  render() {
    return (
      <h1> this is user show</h1>
    )
  }
}

export default UserShow;