import { styled } from '@stitches/react';

export const StyledHeader = styled('header', {
  '.NavBar': {
    background: "Black",
    display: 'flex',
    justifyContent: 'center', // Centraliza os itens horizontalmente
    position: 'fixed',
    top: '0',
    width: '100%',
    height: '8vh',
    padding: '10px 0',
    zIndex: 1000,
  },
  '.NavBarItem': {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'center', // Centraliza os itens horizontalmente
    alignItems: 'center', // Centraliza os itens verticalmente
    margin: 0,
    padding: 0,
    gap: '15px', // Adiciona espaço entre os itens
  },
  '.NavItens': {
    margin: 0,
  },
  '.NavItens a': {
    color: 'white',
    textDecoration: 'none',
    padding: '8px 16px',
  },
  '.NavItens a:hover': {
    backgroundColor: '#575757',
    borderRadius: '4px',
  },
});