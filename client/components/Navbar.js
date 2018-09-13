import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export default class Navbar extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="navbar-container">
        <h3>Paradox State</h3>
        <div className="navbar-titles">
          <Link to="/lasers">
            <div>Lasers</div>
          </Link>
          <Link to="/lighting">
            <div>Lighting</div>
          </Link>
          <Link to="/projection-mapping">
            <div>Projection Mapping</div>
          </Link>
          <Link to="/cgi">
            <div>CGI</div>
          </Link>
        </div>
      </div>
    );
  }
}
