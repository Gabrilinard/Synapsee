import React from 'react';
import { FaLeaf } from 'react-icons/fa';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { 
    StyledContainer, 
    MainContent, 
    IconWrapper, 
    Title, 
    Description, 
    Feed, 
    FeedItem 
} from './style';

const Home = () => {
    return (
        <StyledContainer>
            <Header />
            <MainContent>
                <IconWrapper>
                    <FaLeaf />
                </IconWrapper>
                <Title>Bem-vindo ao Ecoflix! (FEED)</Title>
                <Description>
                    Explore uma ampla variedade de conteúdos sobre sustentabilidade, ecologia e preservação ambiental.
                </Description>
                <Feed>
                    <FeedItem>
                        <h2>Título do Artigo 1</h2>
                        <p>Resumo do conteúdo do artigo 1...</p>
                    </FeedItem>
                    <FeedItem>
                        <h2>Título do Artigo 2</h2>
                        <p>Resumo do conteúdo do artigo 2...</p>
                    </FeedItem>
                    {/* Adicione mais itens de feed aqui */}
                </Feed>
            </MainContent>
            <Footer />
        </StyledContainer>
    );
};

export default Home;