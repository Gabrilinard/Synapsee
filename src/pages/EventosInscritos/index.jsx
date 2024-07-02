import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Container, EventDetails } from "./style";
import { format } from "date-fns";

const EventosInscritos = () => {
  const [eventosInscritos, setEventosInscritos] = useState([]);

  useEffect(() => {
    // Carrega os eventos inscritos do localStorage ao montar o componente
    const storedUserEvents = JSON.parse(localStorage.getItem("user_events")) || [];
    const eventsStorage = JSON.parse(localStorage.getItem("events_bd")) || [];

    // Filtra os eventos inscritos pelo usuário atual
    const inscritos = eventsStorage.filter(event => storedUserEvents.includes(event.id));
    setEventosInscritos(inscritos);
  }, []);

  // Função para cancelar a inscrição em um evento
  const handleCancelSubscription = (event) => {
    const confirmCancel = window.confirm("Tem certeza que deseja cancelar a inscrição neste evento?");
    if (confirmCancel) {
      const storedUserEvents = JSON.parse(localStorage.getItem("user_events")) || [];
      const updatedUserEvents = storedUserEvents.filter(id => id !== event.id);
      localStorage.setItem("user_events", JSON.stringify(updatedUserEvents));
      setEventosInscritos(eventosInscritos.filter(e => e.id !== event.id));

      // Limpa o evento inscrito na página Home, se necessário
      const eventoInscrito = JSON.parse(localStorage.getItem("evento_inscrito"));
      if (eventoInscrito && eventoInscrito.id === event.id) {
        localStorage.removeItem("evento_inscrito");
      }
    }
  };

  return (
    <>
      <Header />
      <Container>
        <h1>Eventos Inscritos:</h1>
        {eventosInscritos.length > 0 ? (
          eventosInscritos.map(event => (
            <EventDetails key={event.id}>
              <p><strong>Nome:</strong> {event.organizador}</p>
              <p><strong>Categoria do evento:</strong> {event.categoria}</p>
              <p><strong>Estado do evento:</strong> {event.estado}</p>
              <p><strong>Cidade do evento:</strong> {event.cidade}</p>
              <p><strong>Data do evento:</strong> {format(new Date(event.data), "dd/MM/yyyy")}</p>
              <p><strong>Instituição do evento:</strong> {event.instituicao}</p>
              <p><strong>Endereço do evento:</strong> {event.endereco}</p>
              <button onClick={() => handleCancelSubscription(event)} style={{ backgroundColor: "#f44336", color: "white", padding: "10px", border: "none", cursor: "pointer", borderRadius: "4px" }}>Cancelar Inscrição</button>
            </EventDetails>
          ))
        ) : (
          <p>Nenhum evento inscrito encontrado.</p>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default EventosInscritos;
