import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Menu = () => {
  return (
    <nav className="menu">
      <ul className="menu__list">
        <li className="menu__item">
          <Link to="/">
            <span className="menu__link">Home</span>
          </Link>
        </li>
        <li className="menu__item">
          <Link to="/themes">
            <span className="menu__link">Themes</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
