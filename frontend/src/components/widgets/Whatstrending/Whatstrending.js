import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Whatstrending.css';

const Whatstrending = () => {
  const [trendingHeadlines, setTrendingHeadlines] = useState([]);

    useEffect(() => {
        const fetchTrendingHeadlines = async () => {
        const apiKey = '84793400c6e74aaa9dfcacebf3601666';
        const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
    
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
    <div className='main-container'>
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