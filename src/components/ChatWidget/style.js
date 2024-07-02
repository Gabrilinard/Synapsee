import styled from 'styled-components';

export const ChatWidgetContainer = styled.div`
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: ${props => (props.isOpen ? '300px' : 'auto')};
    height: ${props => (props.isOpen ? '400px' : '50px')};
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease;
    z-index: 1000;
`;

export const ChatHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: #1a237e;
    color: white;
    cursor: pointer;
`;

export const ChatBody = styled.div`
    flex: 1;
    padding: 10px;
    overflow-y: auto;
    background-color: #f9f9f9;
`;

export const ChatFooter = styled.div`
    display: flex;
    padding: 10px;
    background-color: #eeeeee;
`;

export const ChatInput = styled.input`
    flex: 1;
    padding: 10px;
    border: 1px solid #cccccc;
    border-radius: 4px;
    margin-right: 10px;
`;

export const ChatButton = styled.button`
    padding: 10px;
    background-color: #1f308e;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background-color: #1a237e;
    }
`;

export const ToggleButton = styled.button`
    padding: 5px 10px;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 16px;
`;

export const MessageContainer = styled.div`
    margin-bottom: 10px;
`;

export const Message = styled.div`
    position: relative;
    padding: 15px;
    border-radius: 8px;
    background-color: #e0e0e0; /* Cor de fundo um pouco mais escura */
    max-width: 80%;
    margin: 10px 0;
`;

export const DeleteButton = styled.button`
    position: absolute;
    top: 5px;
    right: 5px;
    background-color: #f44336;
    color: white;
    border: none;
    border-radius: 50%;
    padding: 5px;
    cursor: pointer;
`;

