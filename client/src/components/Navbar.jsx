import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  state = {};
  render() {
    return (
      <div className="navbar-container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand" id="navLink" to="/">
            Home
          </Link>
          <div className="navbar-nav collapse navbar-collapse d-flex justify-content-center">
            <Link className="nav-link" id="navLink" to="/user/new">
              Create New User
            </Link>
            <Link className="nav-link" id="navLink" to="/users">
              Users List
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
