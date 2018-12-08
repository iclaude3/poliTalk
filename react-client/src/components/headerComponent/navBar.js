import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
        <header>
            <logo>PolyTalk</logo> 
            <ul id="headerButtons">
              <li className="navButton">
                <Link className="link" to="/">Home</Link>
              </li>
              <li className="navButton">
                <Link className="link" to="/about">About</Link>
              </li>
              <li className="navButton">
                <Link className="link" to="/bills">Bills</Link>
              </li>
              <li className="navButton">
                <Link className="link" to="/bills">Quiz</Link>
              </li>
              <li className="navButton">
                <Link className="link" to="/funFact">Fun Facts</Link>
              </li>
            </ul>
        </header>
    )
  }
}

export default NavBar;