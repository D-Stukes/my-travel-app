import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav2 extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li><Link to="/">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
        </ul>
      </nav>
    );
  };
}

export default Nav2;


