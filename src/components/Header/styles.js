import { styled } from '@stitches/react';

export const StyledHeader = styled('header', {
  background: '#222',
  padding: '15px 0',
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100%', 
  zIndex: 1000,
  '.NavBar': {
    display: 'flex',
    justifyContent: 'center',
  },
  '.NavBarItem': {
    listStyle: 'none',
    display: 'flex',
    gap: '15px',
  },
  '.NavItens a': {
    color: 'white',
    textDecoration: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
  },
  '.NavItens a:hover': {
    backgroundColor: '#444',
  },
});
