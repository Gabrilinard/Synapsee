import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const InputContainer = styled.div`
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
`;

export const Button = styled.button`
  padding: 0.75rem;
  font-size: 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Message = styled.p`
  margin-top: 1rem;
  color: ${(props) => (props.error ? 'red' : 'green')};
`;

export const HomeLink = styled(Link)`
  display: inline-block;
  margin-top: 1.5rem;
  font-size: 1rem;
  color: #007bff;

  &:hover {
    text-decoration: underline;
  }
`;

export const RadioContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

export const RadioLabel = styled.label`
  margin-right: 1rem;
  font-size: 1rem;
`;

export const RadioInput = styled.input`
  margin-right: 0.5rem;
`;
