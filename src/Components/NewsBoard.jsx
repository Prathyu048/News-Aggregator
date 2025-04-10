import React, { useEffect, useState } from 'react';
import Items from './Items';

const NewsBoard = ({ category, searchQuery }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const url = `/api/news?category=${category}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        setArticles(data.articles || []);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };
    

    fetchArticles();
  }, [category]);

  const filteredArticles = searchQuery
    ? articles.filter(article =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : articles || [];

  return (
    <div>
      <h2 className='text-center' style={{ paddingTop: '15px' }}>
        Latest <span className='badge bg-danger'>News</span>
      </h2>
      {searchQuery && filteredArticles.length === 0 && (
        <p className='text-center'>No articles found for the search query.</p>
      )}
      {(searchQuery ? filteredArticles : articles).map((news, index) => (
        <Items
          key={index}
          title={news.title}
          description={news.description}
          src={news.urlToImage}
          url={news.url}
        />
      ))}
    </div>
  );
};

export default NewsBoard;