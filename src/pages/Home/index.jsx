import React from 'react';
import { StyledContainer, MainContent, IconWrapper, Title } from './style';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ChatWidget from '../../components/ChatWidget';
import { FaPuzzlePiece } from 'react-icons/fa'; // Importe o ícone de quebra-cabeça
import Hero from '../../components/Hero';
import EventSection from '../../components/EventSection';
import useAuth from "../../hooks/useAuth"; 

const Home = () => {
    const { user } = useAuth(); 

    return (
        <>
            <Header />
            <StyledContainer>
                <Hero />
                <MainContent>
                    <IconWrapper>
                        <FaPuzzlePiece /> {/* Utilize o ícone de quebra-cabeça */}
                    </IconWrapper>
                    <Title>Bem-vindo ao Synapse!</Title>
                    <EventSection />
                </MainContent>
                {user && <ChatWidget userName={user.name} />} {/* Renderize o ChatWidget apenas se o usuário estiver autenticado */}
            </StyledContainer>
            <Footer />
        </>
    );
};

export default Home;
