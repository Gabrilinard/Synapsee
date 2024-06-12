import { styled } from '@stitches/react';

export const StyledHeader = styled('header', {
  background: '#222', // Cor de fundo mais escura
  padding: '15px 0', // Padding aumentado para dar mais espaço entre o texto e a borda
  position: 'fixed',
  top: '0',
  width: '100%',
  zIndex: 1000,
  '.NavBar': {
    background: "Black",
    display: 'flex',
    justifyContent: 'center', // Centraliza os itens horizontalmente
  },
  '.NavBarItem': {
    listStyle: 'none',
    display: 'flex',
    gap: '15px', // Adiciona espaço entre os itens
  },
  '.NavItens': {
    margin: 0,
  },
  '.NavItens a': {
    color: 'white',
    textDecoration: 'none',
    padding: '10px 20px', // Padding maior para uma área de clique mais fácil
    borderRadius: '5px', // Borda arredondada
    transition: 'background-color 0.3s',
  },
  '.NavItens a:hover': {
    backgroundColor: '#444', // Cor de fundo mais escura ao passar o mouse
  },
});