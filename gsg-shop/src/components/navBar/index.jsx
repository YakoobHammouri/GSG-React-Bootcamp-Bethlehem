import React from 'react';
import './navBar.css';

const NavBar = () => {
  // TODO step 8 : cerate  Link for pages
  return (
    <div className="nav-bar">
      <div>
        <h2>GSG Shop</h2>
      </div>
      <div className="nav-items">
        <span>Home</span>
        <span>About</span>
        <span>Profile</span>
        <span>Login</span>
      </div>
    </div>
  );
};

export default NavBar;
