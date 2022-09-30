import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div>
    {/*    <h2>Bookstore CMS</h2>
    <ul>
      <li>
        <Link to="/">Books</Link>
      </li>
      <li>
        <Link to="Categories">Categories</Link>
      </li>
    </ul>
 */}
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <h2 className="navbar-brand">BookStore CMS</h2>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to="/">Books</Link>
          </li>
          <li className="nav-item">
            <Link to="Categories">Categories</Link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

export default Navbar;
