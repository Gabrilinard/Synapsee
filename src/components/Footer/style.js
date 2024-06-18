import styled from 'styled-components';

export const StyledFooter = styled.footer`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #f8f9fa;
    bottom: 0;

    p {
        margin: 0;
        text-align: center; /* Centraliza o texto */
        flex: 1; /* Faz o parágrafo ocupar o espaço disponível */
    }

    a {
        color: #000;
        margin-left: 1rem;

        &:hover {
            color: #e1306c;
        }
    }

    svg {
        margin-left: 0.5rem;
    }
`;
