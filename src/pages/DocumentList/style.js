// src/components/style.js
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    padding: '20px',
    textAlign: 'left',
    backgroundColor: '#f0f0f0',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    marginTop: '0px', // Ajuste para dar espaço após o Header
  },
  header: {
    marginBottom: '20px',
    color: '#333',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  item: {
    marginBottom: '15px',
    padding: '15px',
    backgroundColor: '#fff',
    borderRadius: '5px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s',
    '&:hover': {
      transform: 'scale(1.02)',
    },
  },
  title: {
    fontSize: '1.2rem',
    color: '#007bff',
  },
  description: {
    fontSize: '1rem',
    color: '#666',
  },
  downloadLink: {
    textDecoration: 'none',
  },
  button: {
    marginTop: '10px',
    padding: '10px 20px',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    '&:hover': {
      backgroundColor: '#0056b3',
    },
  },
});

export default useStyles;
