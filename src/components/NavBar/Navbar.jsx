
import React from 'react';
import JadooLogo from '../../assets/svg/jadoo.svg';
import DropDown from './DropDown';

import './NavBar.css';

const NavBar = () => {
  return (
    <div className="navbar">

      <img className="logo" src={JadooLogo} alt="Jadoo"/>

      <ol className="list">
        <li className="list-item">
          <a href="#destination">Destinations</a>
        </li>
        <li className="list-item">
          <a href="#services">Hotels</a>
        </li>
        <li className="list-item">
          <a href="#">Flights</a>
        </li>
        <li className="list-item">
          <a href="#book-a-trip">Bookings</a>
        </li>
      </ol>

      <button className="button login">Login</button>
      <button className="button sign-up">Signup</button>
      <DropDown/>
    </div>
  );
};

export default NavBar;
