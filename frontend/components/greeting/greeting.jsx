import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, signOut }) => {
  const signedOutGreeting = () => (
    <nav className="signin-signup">
      <ul>
        <li><Link to="/signin">Sign in!</Link></li>
        <li><Link to="/signup">Sign up!</Link></li>
      </ul>
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