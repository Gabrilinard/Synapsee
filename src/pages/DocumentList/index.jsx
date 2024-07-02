// src/components/DocumentList.js
import React from 'react';
import Header from '../../components/Header'; 
import Footer from '../../components/Footer';
// Exemplo correto
import GameSecretImage from "../../assets/gamesecret.png";
import History from "../../assets/historie.png"
import Snake from "../../assets/snake.png"
import Memoria from "../../assets/memoria.png"
import {
  Container,
  HeaderText,
  GameGrid,
  GameItem,
  GameLink,
  GameImage,
  GameTitle,
} from './style'; // Importando estilos do styled-components

// Dados dos jogos
const games = [
  {
    title: 'Descubra a Palavra',
    imageUrl: GameSecretImage,
    gameUrl: 'https://meek-basbousa-d48605.netlify.app',
  },
  {
    title: 'Monte sua História',
    imageUrl: History,
    gameUrl: 'https://aicomicfactory.app/',
  },
  {
    title: 'Jogo da Cobrinha',
    imageUrl: Snake,
    gameUrl: 'https://devmagno.github.io/js-snake-game/',
  },
  {
    title: 'Jogo da Memória',
    imageUrl: Memoria,
    gameUrl: 'https://manualdodev.github.io/memory-game/',
  },
];

const DocumentList = () => {
  return (
    <>
      <Header />
      <Container>
        <HeaderText>Jogos Acessíveis para Pessoas Autistas</HeaderText>
        <GameGrid>
          {games.map((game, index) => (
            <GameItem key={index}>
              <GameLink 
                href={game.gameUrl} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <GameImage 
                  src={game.imageUrl} 
                  alt={game.title} 
                />
              </GameLink>
              <GameTitle>{game.title}</GameTitle>
            </GameItem>
          ))}
        </GameGrid>
      </Container>
      <Footer />
    </>
  );
};

export default DocumentList;
