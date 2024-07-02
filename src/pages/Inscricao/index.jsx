import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Container, EventDetails } from "./style";
import { format } from "date-fns";

const Index = () => {
  const [eventoInscrito, setEventoInscrito] = useState(null);
  const [organizador, setOrganizador] = useState(null);

  useEffect(() => {
    const evento = JSON.parse(localStorage.getItem("evento_inscrito")) || null;
    setEventoInscrito(evento);

    // Buscar e setar o organizador correspondente
    if (evento) {
      const eventsStorage = JSON.parse(localStorage.getItem("events_bd")) || [];
      const organizadorEvento = eventsStorage.find((e) => e.id === evento.id)?.organizador || null;
      setOrganizador(organizadorEvento);
    }
  }, []);

  return (
    <>
      <Header />
      <Container>
        <h1>Detalhes do Evento:</h1>
        {eventoInscrito ? (
          <EventDetails key={eventoInscrito.id}>
            <p><strong>Nome do Organizador:</strong> {organizador ? organizador : "Nome do Organizador Indisponível"}</p>
            <p><strong>Categoria do evento:</strong> {eventoInscrito.categoria}</p>
            <p><strong>Estado do evento:</strong> {eventoInscrito.estado}</p>
            <p><strong>Cidade do evento:</strong> {eventoInscrito.cidade}</p>
            <p><strong>Bairro do evento:</strong> {eventoInscrito.bairro}</p>
            <p><strong>Data do evento:</strong> {format(new Date(eventoInscrito.data), "dd/MM/yyyy")}</p>
            <p><strong>Horário do evento:</strong> {eventoInscrito.horario}</p>
            <p><strong>Instituição do evento:</strong> {eventoInscrito.instituicao}</p>
            <p><strong>Endereço do evento:</strong> {eventoInscrito.endereco}</p>
            {eventoInscrito.complemento && <p><strong>Complemento do evento:</strong> {eventoInscrito.complemento}</p>}
            {eventoInscrito.referencia && <p><strong>Referência do evento:</strong> {eventoInscrito.referencia}</p>}
          </EventDetails>
        ) : (
          <p>Nenhum evento inscrito encontrado.</p>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default Index;
