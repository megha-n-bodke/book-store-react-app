import React from "react";
import { Link } from "react-router-dom";

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
    <nav className="navbar navbar-expand-lg navbar-light bg-light ps-5">
      <h1 className="navbar-brand text-primary logo fw-bold">Bookstore CMS</h1>
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
          <li className="nav-item active ps-4">
            <Link to="/" className="text-decoration-none text-dark">
              BOOKS
            </Link>
          </li>
          <li className="nav-item ps-4">
            <Link
              to="Categories"
              className="text-decoration-none text-secondary"
            >
              CATEGORIES
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

export default Navbar;
