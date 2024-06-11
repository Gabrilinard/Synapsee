import { styled } from '@stitches/react';

export const StyledContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 'calc(100vh - 8vh)', 
    backgroundColor: '#f0f0f0',
    padding: '20px',
});
  

export const StyledSearchForm = styled('form', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '20px',
    '& > input': {
    marginBottom: '10px',
        padding: '10px',
        width: '300px',
        borderRadius: '5px',
        border: '1px solid #ccc',
    },
});

export const StyledResultsContainer = styled('div', {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)', 
    gap: '20px', 
    marginBottom: '20px',
});

export const StyledResultItem = styled('div', {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    width: '300px',
    textAlign: 'center',
});

export const StyledButton = styled('button', {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    '&:hover': {
        backgroundColor: '#0056b3',
    },
});
