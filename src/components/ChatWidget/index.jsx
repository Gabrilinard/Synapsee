import React, { useState, useEffect, useRef } from 'react';
import {
    ChatWidgetContainer,
    ChatHeader,
    ChatBody,
    ChatFooter,
    ChatInput,
    ChatButton,
    ToggleButton,
    MessageContainer,
    Message,
    DeleteButton // Novo componente para deletar mensagem
} from './style';

const ChatWidget = ({ userName }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState("");
    const chatWidgetRef = useRef(null);

    useEffect(() => {
        const storedMessages = localStorage.getItem('chatMessages');
        if (storedMessages) {
            setMessages(JSON.parse(storedMessages));
        }

        // Adiciona um event listener para fechar o chat ao clicar fora do componente
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleClickOutside = (event) => {
        if (chatWidgetRef.current && !chatWidgetRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    const saveMessagesToStorage = (messages) => {
        localStorage.setItem('chatMessages', JSON.stringify(messages));
    };

    const toggleChat = () => setIsOpen(!isOpen);

    const sendMessage = () => {
        if (inputMessage.trim()) {
            const newMessage = { id: messages.length + 1, sender: userName, content: inputMessage };
            const newMessages = [...messages, newMessage];
            setMessages(newMessages);
            saveMessagesToStorage(newMessages);
            setInputMessage("");
        }
    };

    const deleteMessage = (id) => {
        const updatedMessages = messages.filter(message => message.id !== id);
        setMessages(updatedMessages);
        saveMessagesToStorage(updatedMessages);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            sendMessage();
        }
    };

    return (
        <ChatWidgetContainer isOpen={isOpen} ref={chatWidgetRef}>
            <ChatHeader onClick={toggleChat}>
                <ToggleButton>{isOpen ? 'Fechar' : 'Chat'}</ToggleButton>
                {isOpen && <span>Fale com o nosso suporte</span>}
            </ChatHeader>
            {isOpen && (
                <>
                    <ChatBody>
                        {messages.map(message => (
                            <MessageContainer key={message.id}>
                                <Message sender={message.sender}>
                                    {message.sender === userName && (
                                        <DeleteButton onClick={() => deleteMessage(message.id)}>X</DeleteButton>
                                    )}
                                    {message.sender === userName ? `${userName}: ${message.content}` : message.content}
                                </Message>
                            </MessageContainer>
                        ))}
                    </ChatBody>
                    <ChatFooter>
                        <ChatInput
                            type="text"
                            value={inputMessage}
                            onChange={(e) => setInputMessage(e.target.value)}
                            onKeyPress={handleKeyPress}
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
