import styled from 'styled-components';

export const Container = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 40px;
    background-color: #f5f5f5;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    font-family: 'Arial, sans-serif';
`;

export const Title = styled.h2`
    color: #333;
    margin-bottom: 20px;
`;

export const Label = styled.label`
    display: block;
    margin-bottom: 10px;
    font-weight: bold;
    color: #555;
`;

export const Select = styled.select`
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #fff
`;

export const Input = styled.input`
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #fff;
`;

export const Button = styled.button`
  display: block;
  width: 100%;
  padding: 12px 20px;
  font-size: 16px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #45a049;
  }
`;

export const List = styled.ul`
    list-style-type: none;
    padding: 0;
    margin-top: 20px;
`;

export const ListItem = styled.li`
    padding: 12px 16px;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
`;

export const ProcessingMessage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #333;
  color: white;
  padding: 10px;
  text-align: center;
  z-index: 1000;
`;
