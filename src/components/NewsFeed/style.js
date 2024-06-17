// style.js
import styled from 'styled-components';

export const NewsItem = styled.div`
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  background-color: #f9f9f9;
`;

export const NewsTitle = styled.h3`
  margin: 0;
  font-size: 1.2em;
  color: #333;
`;

export const NewsDescription = styled.p`
  margin: 10px 0;
  color: #555;
`;

export const NewsLink = styled.a`
  color: #007bff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
