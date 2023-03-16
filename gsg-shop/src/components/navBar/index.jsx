import React from 'react';
import './navBar.css';
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <div className="nav-bar">
      <div>
        <h2>GSG Shop</h2>
      </div>
      <div className="nav-items">
        <span>
          <Link to="/">Home</Link>
        </span>
        <span>
          <Link to="about">About</Link>
        </span>
        <span>Profile</span>
        <span>Login</span>
      </div>
    </div>
  );
};

export default NavBar;
