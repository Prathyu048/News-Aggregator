// src/Components/SearchNews.jsx
import React, { useState } from 'react';
import './Navbar.css'
const SearchNews = ({ setSearchedArticles }) => {
  const [query, setQuery] = useState('');
  

  const handleSearch = async () => {
    const apiKey = import.meta.env.VITE_API_KEY;
    if (!apiKey) {
      alert('API key missing!');
      return;
    }
    if (!query.trim()) {
      alert('Please enter a search term!');
      return;
    }
    const url = `http://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&apiKey=${apiKey}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setSearchedArticles(data.articles || []);
    } catch (error) {
      console.error('Error fetching news:', error);
  
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