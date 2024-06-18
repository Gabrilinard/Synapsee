import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Container principal que centraliza o conteúdo
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f7f9fc;
  padding: 20px;
`;

// Título principal da página
export const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
`;

// Estilo para o formulário
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

// Container para cada input e seu rótulo
export const InputContainer = styled.div`
  width: 100%;
  margin-bottom: 15px;
`;

// Rótulo para os inputs
export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  color: #555;
  font-weight: bold;
`;

// Estilo para os inputs
export const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  transition: border-color 0.2s;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

// Estilo para o botão de submissão
export const Button = styled.button`
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;

// Estilo para a mensagem de feedback
export const Message = styled.p`
  margin-top: 20px;
  font-size: 1rem;
  color: ${props => (props.error ? 'red' : 'green')};
`;

// Estilo para o link de navegação para a home
export const HomeLink = styled(Link)`
  margin-top: 20px;
  font-size: 1rem;
  color: #007bff;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: #0056b3;
  }
`;
