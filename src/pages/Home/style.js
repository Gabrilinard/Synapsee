import { styled } from '@stitches/react';

export const StyledContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 'calc(100vh - 8vh)', // Altura da tela menos a altura do header
    backgroundColor: '#f0f0f0',
    padding: '20px',
  });