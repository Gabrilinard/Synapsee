// src/components/style.js
import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  text-align: center;
  background-color: #f5f5f5;
`;

export const HeaderText = styled.h2`
  margin-bottom: 20px;
  font-size: 2rem;
  color: #333;
`;

export const GameGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 50px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const GameItem = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

export const GameLink = styled.a`
  display: block;
  text-decoration: none;
  color: inherit;

  &:hover {
    color: #e1306c;
  }
`;

export const GameImage = styled.img`
  width: 70%; /* Diminui a largura da imagem */
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const GameTitle = styled.h3`
  margin-bottom: 10px;
  font-size: 1.25rem;
  color: #444;
  padding-top: 10px;
`;
