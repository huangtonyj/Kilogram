import React from 'react';
import { Link } from 'react-router-dom';
// import kilogramLogo from '../../../app/assets/images/kilogram_logo.png';

const NavBar = ({ currentUser, signOut }) => {
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
        <p>Hello, {currentUser.username}!</p>
      </div>

      <div className='navbar-links'>
        <ul>
          <li><button onClick={signOut} className='icon-profile'>Sign Out</button></li>
          <li><Link to={`/posts/new`} className='icon-profile'>Upload</Link></li>
          <li><Link to={`/users/${currentUser.id}`} className='icon-profile'>Profile</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;


