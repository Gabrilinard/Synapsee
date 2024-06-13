import { styled } from '@stitches/react';

export const StyledHeader = styled('header', {
  // Adicionando gradiente
  background: 'linear-gradient(135deg, #006400, #32CD32)', 
  padding: '25px 0', 
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100%',
  zIndex: 1000,
  fontFamily: "'Arial', 'Helvetica', 'sans-serif'",

  '.NavBar': {
    display: 'flex',
    justifyContent: 'center',
  },
  '.NavBarItem': {
    listStyle: 'none',
    display: 'flex',
    gap: '20px', 
  },
  '.NavItens a': {
    color: '#FFFFFF', 
    textDecoration: 'none',
    padding: '15px 25px', 
    borderRadius: '10px', 
    transition: 'background-color 0.3s',
    fontWeight: '600', // 
  },
  '.NavItens a:hover': {
    backgroundColor: '#228B22', // 
  },
});
