import { styled } from '@stitches/react';

export const StyledContainer = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    minHeight: '100vh',
    backgroundColor: '#f0f0f0',
    padding: '20px',  
    boxSizing: 'border-box',
});

export const ContentWrapper = styled('div', {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '800px',
    width: '100%',  
    boxSizing: 'border-box',
});

export const StyledSearchForm = styled('form', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '20px',
    '& > input': {
        marginBottom: '10px',
        padding: '10px',
        width: '100%',  
        maxWidth: '300px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        boxSizing: 'border-box',
    },
});

export const StyledResultsWrapper = styled('div', {
    width: '100%',
    maxHeight: '60vh',  
    overflowY: 'auto',  
    marginTop: '20px',
    boxSizing: 'border-box',
});

export const StyledResultsContainer = styled('div', {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
    gap: '20px',
    justifyContent: 'center',
    width: '100%',
    boxSizing: 'border-box',
});

export const StyledResultItem = styled('div', {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    textAlign: 'center',
    boxSizing: 'border-box',
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
