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
    background-color: #4CAF50;
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
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background-color: #45a049;
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

export const Message = styled.p`
    padding: 10px;
    border-radius: 5px;
    background-color: ${({ sender }) => (sender === "User" ? "#d1e7dd" : "#f8d7da")};
    align-self: ${({ sender }) => (sender === "User" ? "flex-end" : "flex-start")};
    max-width: 80%;
`;
