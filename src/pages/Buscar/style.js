import { styled } from '@stitches/react';

export const StyledContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: 'calc(100vh - 8vh)', // Altura da tela menos a altura do header
  backgroundColor: '#f0f0f0',
  padding: '35px',
  width: '100vw', // Cobrir a largura da tela completamente
});



export const StyledResultsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: '20px',
  width: '100%', // Ocupa toda a largura do contêiner pai
  textAlign: 'center', // Centraliza horizontalmente
});

export const StyledResultItem = styled('div', {
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  marginBottom: '10px',
  width: '80%', // Ajustar a largura do item de resultado para caber melhor na tela
  maxWidth: '500px', // Limitar a largura máxima
  textAlign: 'center',

});
