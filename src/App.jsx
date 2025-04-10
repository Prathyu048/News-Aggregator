import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import NewsBoard from './Components/NewsBoard';
import SearchNews from './Components/SearchNews';
import ErrorBoundary from './Components/ErrorBoundary';

const App = () => {
  const [searchedArticles, setSearchedArticles] = useState([]);
  const [category, setcategory] = useState("general");

  return (
    <ErrorBoundary>
      <div>
        <Navbar setSearchedArticles={setSearchedArticles} setcategory={setcategory} />
        
        {searchedArticles.length === 0 ? (
          <NewsBoard category={category} />
        ) : (
          <div className="container my-3">
            <h2 className="text-center">Search Results</h2>
            <div className="row">
              {searchedArticles.map((article, index) => (
                <div key={index} className="col-md-6 col-lg-3 mb-4 "> {/* Adjusted to fit 4 cards in a row */}
                  <div className="card bg-dark text-light d-inline-block px-2 py-2 " style={{ maxWidth: "345px", marginLeft:"-0px"}}>
                    <img
                      src={article.urlToImage || 'https://via.placeholder.com/300x200'}
                      style={{ height: "220px", width: "310px" }}
                      className="card-img-top"
                      alt="News"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{article.title ? article.title.slice(0, 50) : 'No Title Available'}</h5>
                      <p className="card-text">{article.description ? article.description.slice(0, 90) : 'No Description Available'}</p>
                      <a href={article.url} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </ErrorBoundary>
  );
};

export default App;