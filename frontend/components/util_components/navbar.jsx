import React from 'react';
import { Link } from 'react-router-dom';


class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getCurrentUserInfo(this.props.currentUser.id);
  }

  render() {

    return (
      <div className='navbar'>
        <div className='navbar-logo'>
          <a href="#" className="icon-logo">

            <div></div>

            <img
              src={window.images.Kilogram_logo}
              className="kilogram-logo"
            />
          </a>
        </div>

        <div className='navbar-greeting'>
          <p>Hello, {this.props.currentUser.fullname}!</p>
        </div>

        <div className='navbar-links'>
          <ul>
            <li><button onClick={this.props.signOut} className='icon-setting'></button></li>
            <li><Link to={`/posts/new`} className='icon-upload'></Link></li>
            <li><Link to={`/users/${this.props.currentUser.id}`} className='icon-profile'></Link></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default NavBar;


