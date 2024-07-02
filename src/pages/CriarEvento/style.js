import styled from 'styled-components';

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputContainer = styled.div`
  margin-bottom: 15px;
  width: 100%;
`;

export const Label = styled.label`
  font-size: 1.2rem;
  margin-bottom: 5px;
  display: block;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  width: 100%;
`;

export const Select = styled.select`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  width: 100%;
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 1.2rem;
  background-color: #007bff;
  color: #fff;
  border: 2px solid #007bff; /* Borda sólida azul */
  border-radius: 5px; /* Borda arredondada com raio de 5px */
  cursor: pointer;
  margin-top: 10px;
  width: 100%;
  max-width: 200px; /* Definir uma largura máxima se necessário */
`;


export const Message = styled.p`
  margin: 10px 0;
  padding: 10px;
  background-color: ${(props) => (props.success ? "#4CAF50" : "#f0f0f0")};
  text-align: center;
`;

export const HistoryContainer = styled.div`
  margin-top: 30px;
`;

export const HistoryItem = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 10px;
`;

export const HistoryButton = styled.button`
  padding: 5px 10px;
  font-size: 1rem;
  background-color: #dc3545;
  color: #fff;
  border: none;
  cursor: pointer;
  margin-top: 5px;
`;

export const HistoryTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
  text-align: center;
`;
