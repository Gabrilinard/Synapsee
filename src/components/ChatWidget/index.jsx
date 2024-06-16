import React, { useState } from 'react';
import { 
    ChatWidgetContainer, 
    ChatHeader, 
    ChatBody, 
    ChatFooter, 
    ChatInput, 
    ChatButton, 
    ToggleButton, 
    MessageContainer, 
    Message 
} from './style';

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState("");

    const toggleChat = () => setIsOpen(!isOpen);

    const sendMessage = () => {
        if (inputMessage.trim()) {
            setMessages([...messages, { id: messages.length + 1, sender: "User", content: inputMessage }]);
            setInputMessage("");
        }
    };

    return (
        <ChatWidgetContainer isOpen={isOpen}>
            <ChatHeader onClick={toggleChat}>
                <ToggleButton>{isOpen ? 'Fechar' : 'Chat'}</ToggleButton>
                {isOpen && <span>Fale com um especialista</span>}
            </ChatHeader>
            {isOpen && (
                <>
                    <ChatBody>
                        {messages.map(message => (
                            <MessageContainer key={message.id}>
                                <Message sender={message.sender}>{message.sender}: {message.content}</Message>
                            </MessageContainer>
                        ))}
                    </ChatBody>
                    <ChatFooter>
                        <ChatInput
                            type="text"
                            value={inputMessage}
                            onChange={(e) => setInputMessage(e.target.value)}
                            placeholder="Digite sua mensagem..."
                        />
                        <ChatButton onClick={sendMessage}>Enviar</ChatButton>
                    </ChatFooter>
                </>
            )}
        </ChatWidgetContainer>
    );
};

export default ChatWidget;
