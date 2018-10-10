import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, signOut }) => {
  const signedOutGreeting = () => (
    <nav className="signin-signup">
      Welcome to Kilogram!
          <br />
      Please <Link to='/signin'>Sign In</Link> or <Link to='/signup'>Sign Up</Link>
    </nav>
  );

  const signedInGreeting = () => (
    <nav className="header-group">
      <h2>Hello, {currentUser.username}!</h2>
      <button onClick={signOut}>Sign Out</button>
    </nav>
  );

  return currentUser ? signedInGreeting() : signedOutGreeting();
};

export default Greeting;