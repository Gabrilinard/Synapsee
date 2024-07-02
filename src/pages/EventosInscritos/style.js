// style.js

import styled from 'styled-components';

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

export const EventDetails = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  margin-top: 20px;

  p {
    margin-bottom: 10px;
  }

  strong {
    font-weight: bold;
  }
`;
