import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <div>
    <nav className="nav-bar">
      <h1 className="book-heading">Bookstore CMS</h1>

      <ul className="nav-items">
        <li>
          <Link to="/" className="books-link common-styles">
            BOOKS
          </Link>
        </li>
        <li>
          <Link to="Categories" className="categories-link common-styles">
            CATEGORIES
          </Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default Navbar;
