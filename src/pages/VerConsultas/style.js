import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-items: flex-start;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const ImageContainer = styled.div`
    flex: 1;
    max-width: 600px;
    margin-right: 20px;

    img {
        width: 100%;
        height: auto;
        border-radius: 10px;
    }

    @media (max-width: 768px) {
        margin-right: 0;
        margin-bottom: 20px;
    }
`;

export const TextContainer = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #E6F7FF; /* Azul claro confortável para a visão */
    padding: 10px;
    border-radius: 10px;
`;

export const Section = styled.section`
    margin-bottom: 20px;
`;

export const Title = styled.h1`
    font-size: 2em;
    margin-bottom: 10px;
    color: #003366; /* Azul escuro para contraste */
`;

export const Paragraph = styled.p`
    font-size: 1.2em;
    line-height: 1.6;
    margin-bottom: 10px;
    color: #003366; /* Azul escuro para contraste */
`;

export const List = styled.ul`
    padding-left: 20px;
    list-style-type: disc;
    color: #003366; /* Azul escuro para contraste */
`;
