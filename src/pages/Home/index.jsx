import React from 'react';
import { StyledContainer, MainContent, IconWrapper, Title, Description, Feed, FeedItem } from './style';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ChatWidget from '../../components/ChatWidget';
import { FaLeaf } from 'react-icons/fa';
import Hero from '../../components/Hero';
import NewsFeed from '../../components/NewsFeed';
import EventSection from '../../components/EventSection';

const Home = () => {
    return (
        <>
            <Header />
            <StyledContainer>
                <Hero />
                <MainContent>
                    <IconWrapper>
                        <FaLeaf />
                    </IconWrapper>
                    <Title>Bem-vindo ao Ecoflix!</Title>
                    <EventSection />
                    <Description>
                        Explore uma ampla variedade de conteúdos sobre sustentabilidade, ecologia e preservação ambiental.
                    </Description>
                    <NewsFeed />
                </MainContent>
                <ChatWidget />
                <Footer />
            </StyledContainer></>
    );
};

export default Home;
