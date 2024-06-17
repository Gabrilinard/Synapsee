// src/components/NewsFeed/index.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NewsItem, NewsTitle, NewsDescription, NewsLink } from './style';

const NewsFeed = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API_KEY = 'dbf281dd49ba4b1fa504c0219845a9a7'; // Chave da API

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/everything', {
          params: {
            q: 'sustentabilidade',
            language: 'pt',
            apiKey: API_KEY,
          },
        });

        // Filtrando artigos com URLs indesejadas
        const filteredNews = response.data.articles.filter(article => {
            return !article.title.startsWith('[Removed]');
        });

        setNews(filteredNews);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [API_KEY]);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro ao carregar notícias: {error.message}</p>;

  return (
    <div>
      {news.map((article, index) => (
        <NewsItem key={index}>
          <NewsTitle>{article.title}</NewsTitle>
          <NewsDescription>{article.description}</NewsDescription>
          <NewsLink href={article.url} target="_blank" rel="noopener noreferrer">
            Leia mais
          </NewsLink>
        </NewsItem>
      ))}
    </div>
  );
};

export default NewsFeed;
