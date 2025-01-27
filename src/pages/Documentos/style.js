import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f0f8ff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const HeaderTitle = styled.h1`
  text-align: center;
  color: #007acc;
  margin-bottom: 20px;
  font-size: 2.5em;
`;

export const DocumentList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const DocumentItem = styled.li`
  margin-bottom: 20px;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }
`;

export const DocumentLink = styled.a`
  text-decoration: none;
  color: #007acc;
  font-size: 1.5em;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

export const DocumentDescription = styled.p`
  color: #555;
  margin-top: 10px;
  line-height: 1.6;
`;

export const DrawingList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 20px;
`;

export const DrawingItem = styled.li`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const DrawingImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 10px;
`;

export const DrawingTitle = styled.h3`
  color: #007acc;
  font-size: 1.2em;
  margin-bottom: 10px;
`;

export const DrawingDownload = styled.a`
  display: inline-block;
  background-color: #007acc;
  color: #fff;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #005a8c;
  }
`;
