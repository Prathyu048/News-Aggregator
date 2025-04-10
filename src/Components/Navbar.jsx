import React from 'react';
import './Navbar.css';
import SearchNews from './SearchNews';
import { Collapse } from 'bootstrap';

const Navbar = ({ setcategory, setSearchedArticles }) => {
  const collapseNavbar = () => {
    const navbarCollapseEl = document.getElementById('navbarContent');
    if (navbarCollapseEl && navbarCollapseEl.classList.contains('show')) {
      const bsCollapse = Collapse.getOrCreateInstance(navbarCollapseEl);
      bsCollapse.hide();
    }
  };
  const toggleNavbar = () => {
    const navbarCollapseEl = document.getElementById('navbarContent');
    const bsCollapse = Collapse.getOrCreateInstance(navbarCollapseEl);
    bsCollapse.toggle(); // ✅ manually toggle open/close
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-custom small-navbar">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span className="badge bg-light text-dark fs-6">News Aggregator</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar} // ✅ manually toggling
          aria-controls="navbarContent"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <div className="nav-link" onClick={() => { setcategory('technology'); collapseNavbar(); }}>
                Technology
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => { setcategory('business'); collapseNavbar(); }}>
                Business
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => { setcategory('health'); collapseNavbar(); }}>
                Health
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => { setcategory('science'); collapseNavbar(); }}>
                Science
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => { setcategory('sports'); collapseNavbar(); }}>
                Sports
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => { setcategory('entertainment'); collapseNavbar(); }}>
                Entertainment
              </a>
            </li>
            <li>
            <div className="nav-item search-container ms-auto">
            <SearchNews setSearchedArticles={setSearchedArticles} />
          </div>
          </li>
          </ul>

          {/* ✅ SearchNews component outside <ul> and aligned right */}
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
