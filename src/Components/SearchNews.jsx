// src/Components/SearchNews.jsx
import React, { useState } from 'react';
import './Navbar.css'
const SearchNews = ({ setSearchedArticles }) => {
  const [query, setQuery] = useState('');
  

  const handleSearch = async () => {
    if (!query.trim()) {
      alert('Please enter a search term!');
      return;
    }
  
    try {
      const res = await fetch(`/api/news?query=${encodeURIComponent(query)}`);
      const data = await res.json();
      setSearchedArticles(data.articles || []);
    } catch (error) {
      console.error('Error fetching news:', error);
      alert('Something went wrong while searching for news.');
    }
  };
  

  return (
    <div className="d-flex ms-lg-auto mt-2 mt-lg-0 inner-input">
      <input
        className="form-control me-2 ms-lg-auto "
        type="search"
        id="searchInput"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search news..."
        style={{ width: '350px' }}
        aria-label="Search"
      />
      <button onClick={handleSearch} className="btn btn-primary stylish-btn" type="button">Search</button>
      
      
    </div>
  );
};

export default SearchNews;