import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Whatstrending.css';

const Whatstrending = () => {
  const [trendingHeadlines, setTrendingHeadlines] = useState([]);

  useEffect(() => {
    const fetchTrendingHeadlines = async () => {
      const apiKey = process.env.REACT_APP_GNEWS_API;
      const apiUrl = `https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&max=10&apikey=${apiKey}`;

      try {
        const response = await axios.get(apiUrl);

        if (response.data.articles) {
          const shuffledHeadlines = response.data.articles.sort(() => Math.random() - 0.5);
          setTrendingHeadlines(shuffledHeadlines.slice(0, 5));
        } else {
          console.error('Failed to fetch trending headlines');
        }
      } catch (error) {
        console.error('Error fetching trending headlines:', error);
      }
    };

    fetchTrendingHeadlines();
  }, []);

  return (
    <div className='main-container m-1 mr-4'>
      <h3>What's happening in the world</h3>
      <div className="trending-container">
        {trendingHeadlines.map((headline, index) => (
          <div key={index} className="trending-item">
            <div className="headline-box">
              <span className="headline">{headline.title}</span>
            </div>
            <div className="source-box">
              <span className="source">{headline.source.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Whatstrending;
