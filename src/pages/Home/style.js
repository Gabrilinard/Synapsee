import styled from 'styled-components';

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f9f9f9;
    padding: 20px;
    min-height: 100vh;
    font-family: Arial, sans-serif;
`;

export const MainContent = styled.main`
    max-width: 800px;
    width: 100%;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin-top: 20px;
`;

export const IconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 48px;
    color: #1e90ff; /* Azul simbólico para autismo */
    margin-bottom: 20px;
`;

export const Title = styled.h1`
    font-size: 24px;
    color: #333333;
    text-align: center;
    margin-bottom: 10px;
`;

export const Feed = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

export const FeedItem = styled.div`
    padding: 10px;
    border: 1px solid #eeeeee;
    border-radius: 5px;
    background-color: #fafafa;

    h2 {
        font-size: 20px;
        margin: 0 0 10px;
    }

    p {
        font-size: 14px;
        margin: 0;
    }
`;
