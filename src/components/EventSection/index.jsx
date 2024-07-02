import React from 'react';
import styled from 'styled-components';
import Event from './Event';
import eventsData from './eventsData'; // Arquivo separado para os dados dos eventos

const EventSection = () => {
    return (
        <Container>
            <Title>Explore os Últimos Eventos e Notícias sobre Neurodiversidade!</Title>
            <EventList>
                {eventsData.map((event, index) => (
                    <Event key={index} event={event} />
                ))}
            </EventList>
        </Container>
    );
};

const Container = styled.section`
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center; /* Centraliza verticalmente */
    align-items: center; /* Centraliza horizontalmente */
    text-align: center;
`;

const Title = styled.h2`
    font-size: 2rem;
    margin-bottom: 2rem;
`;

const EventList = styled.div`
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

export default EventSection;
