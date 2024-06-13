import styled from 'styled-components';

export const Container = styled.div`
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Arial, sans-serif';
  padding-top: 100px;
`;

export const Title = styled.h2`
  color: #333;
  text-align: center;
  margin-bottom: 30px;
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const ListItem = styled.li`
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #f9f9f9;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DeleteButton = styled.button`
  background-color: #f44336;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
`;
