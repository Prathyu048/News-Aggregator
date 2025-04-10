import React from 'react';
import './Navbar.css';
import SearchNews from './SearchNews';

const Navbar = ({ setcategory,setSearchedArticles}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-custom small-navbar ">
      <div className="container-fluid">
        <a className="navbar-brand " href="#">
          <span className="badge bg-light text-dark fs-6 " >News Aggregator</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <div className="nav-link" onClick={() => setcategory('technology')}>
                Technology
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => setcategory('business')}>
                Business
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => setcategory('health')}>
                Health
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => setcategory('science')}>
                Science
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => setcategory('sports')}>
                Sports
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => setcategory('entertainment')}>
                Entertainment
              </a>
              
            </li>
            <div className="search-container">
          <SearchNews setSearchedArticles={setSearchedArticles} />
          </div>
          </ul>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
