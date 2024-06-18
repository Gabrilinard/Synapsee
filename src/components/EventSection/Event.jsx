// EventSection/Event.jsx

import React from 'react';
import styled from 'styled-components';

const Event = ({ event }) => {
    return (
        <EventContainer>
            <EventImage src={event.imageUrl} alt={event.title} />
            <EventInfo>
                <EventTitle>{event.title}</EventTitle>
                <EventDescription>{event.description}</EventDescription>
                <EventLink href={event.link} target="_blank" rel="noopener noreferrer">Saiba mais</EventLink>
            </EventInfo>
        </EventContainer>
    );
};

const EventContainer = styled.div`
    background-color: #f0f0f0;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const EventImage = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
`;

const EventInfo = styled.div`
    padding: 1rem;
`;

const EventTitle = styled.h3`
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
`;

const EventDescription = styled.p`
    font-size: 1rem;
    color: #555;
    margin-bottom: 1rem;
`;

const EventLink = styled.a`
    display: inline-block;
    color: #007bff;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s;

    &:hover {
        color: #0056b3;
    }
`;

export default Event;
