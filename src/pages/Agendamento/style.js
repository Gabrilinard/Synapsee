import styled, { css } from 'styled-components';

export const StyledContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 147px;
`;

export const StyledTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
  text-align: center;
`;

export const StyledSearchForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  text-align: center;
  margin-top: 20px;
`;

export const StyledInputContainer = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledInput = styled.input`
  padding: 12px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  width: 100%;
`;

export const StyledSelect = styled.select`
  padding: 12px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  width: 100%;
`;

export const StyledButton = styled.button`
  padding: 12px 24px;
  font-size: 1rem;
  background-color: #28a745; /* Verde inicial */
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 6px;
  transition: background-color 0.3s ease;
  margin-top: 10px;

  &:hover {
    background-color: #218838; /* Verde escuro ao passar o mouse */
  }

  ${(props) =>
    props.inscrito &&
    css`
      background-color: #dc3545; /* Vermelho quando inscrito */
      &:hover {
        background-color: #c82333; /* Vermelho escuro ao passar o mouse */
      }
    `}
`;

export const StyledResultsContainer = styled.div`
  margin-top: 50px;
  margin-bottom: 20px;
  padding: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const StyledResultItem = styled.div`
  background-color: #f8f9fa;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: calc(33.33% - 20px);
  max-width: 300px;
  margin-right: 20px;
  flex: 1 0 auto;
`;
