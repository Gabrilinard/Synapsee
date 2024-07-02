import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  Container,
  Title,
  Form,
  InputContainer,
  Label,
  Input,
  Select,
  Button,
  Message,
  HistoryContainer,
  HistoryItem,
  HistoryButton,
} from "./style";
import { format } from "date-fns";

const CriarEventoPage = () => {
  const [tema, setTema] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");
  const [bairro, setBairro] = useState("");
  const [categoria, setCategoria] = useState("");
  const [data, setData] = useState("");
  const [horario, setHorario] = useState("");
  const [instituicao, setInstituicao] = useState("");
  const [endereco, setEndereco] = useState("");
  const [complemento, setComplemento] = useState("");
  const [referencia, setReferencia] = useState("");
  const [message, setMessage] = useState("");
  const [historicoEventos, setHistoricoEventos] = useState([]);
  const [nomeOrganizador, setNomeOrganizador] = useState("");

  useEffect(() => {
    // Recuperar o nome do usuário do localStorage
    const nomeUsuario = localStorage.getItem("nome_usuario");
    if (nomeUsuario) {
      setNomeOrganizador(nomeUsuario);

      // Recuperar o histórico de eventos do localStorage
      const historico =
        JSON.parse(localStorage.getItem("historico_eventos")) || [];
      const eventosUsuario = historico.filter(
        (evento) => evento.organizador === nomeUsuario
      );
      setHistoricoEventos(eventosUsuario);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const today = new Date();
    const eventDate = new Date(data);

    if (!isValidDate(data)) {
      alert("Por favor, insira uma data válida do evento no formato DD-MM-AAAA.");
      return;
    }

    if (eventDate < today) {
      alert("A data do evento não pode ser anterior à data atual do evento.");
      return;
    }

    const newEvent = {
      id: Math.floor(Math.random() * 1000),
      tema: tema,
      categoria,
      estado,
      cidade,
      bairro,
      data,
      horario,
      instituicao,
      endereco,
      complemento,
      referencia,
      localizacao: `${cidade}, ${estado}`,
      organizador: nomeOrganizador
    };

    let eventsStorage =
      JSON.parse(localStorage.getItem("events_bd")) || [];
    eventsStorage.push(newEvent);
    localStorage.setItem("events_bd", JSON.stringify(eventsStorage));

    const updatedHistorico = [...historicoEventos, newEvent];
    setHistoricoEventos(updatedHistorico);
    localStorage.setItem(
      "historico_eventos",
      JSON.stringify(updatedHistorico)
    );

    setMessage("Evento criado com sucesso!");

    setTimeout(() => {
      setMessage("");
    }, 5000);

    limparCampos();
  };

  const limparCampos = () => {
    setTema("");
    setEstado("");
    setCidade("");
    setBairro("");
    setCategoria("");
    setData("");
    setHorario("");
    setInstituicao("");
    setEndereco("");
    setComplemento("");
    setReferencia("");
  };

  const handleDeleteEvent = (eventId) => {
    const confirmDelete = window.confirm(
      "Tem certeza que deseja deletar este evento?"
    );
    if (confirmDelete) {
      let eventsStorage =
        JSON.parse(localStorage.getItem("events_bd")) || [];
      eventsStorage = eventsStorage.filter(
        (event) => event.id !== eventId
      );
      localStorage.setItem("events_bd", JSON.stringify(eventsStorage));

      let updatedHistorico = historicoEventos.filter(
        (event) => event.id !== eventId
      );
      setHistoricoEventos(updatedHistorico);
      localStorage.setItem(
        "historico_eventos",
        JSON.stringify(updatedHistorico)
      );
    }
  };

  const formatDate = (date) => {
    return format(new Date(date), "dd/MM/yyyy");
  };

  const isValidDate = (dateString) => {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateString.match(regex)) return false;

    const date = new Date(dateString);
    const timestamp = date.getTime();

    if (typeof timestamp !== "number" || isNaN(timestamp)) return false;

    return dateString === date.toISOString().split("T")[0];
  };

  return (
    <>
      <Header />
      <Container>
        <Title>Criar Novo Evento</Title>
        <Form onSubmit={handleSubmit}>
          <InputContainer>
            <Label>Nome do Organizador:</Label>
            <Input
              type="text"
              value={nomeOrganizador}
              disabled // Desabilita a edição
              style={{ backgroundColor: '#f0f0f0', cursor: 'not-allowed' }} // Estilos para indicar desabilitado
            />
          </InputContainer>
          <InputContainer>
            <Label>Estado:</Label>
            <Input
              type="text"
              value={estado}
              onChange={(e) => setEstado(e.target.value)}
              required
            />
          </InputContainer>
          <InputContainer>
            <Label>Cidade:</Label>
            <Input
              type="text"
              value={cidade}
              onChange={(e) => setCidade(e.target.value)}
              required
            />
          </InputContainer>
          <InputContainer>
            <Label>Categoria:</Label>
            <Select
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
              required
            >
              <option value="">Selecione a categoria</option>
              <option value="Sessões Sensoriais">Sessões Sensoriais</option>
              <option value="Oficinas Criativas">Oficinas Criativas</option>
              <option value="Passeios ao Ar Livre">Passeios ao Ar Livre</option>
              <option value="Eventos Culturais">Eventos Culturais</option>
              <option value="Workshops de Habilidades Sociais">Workshops de Habilidades Sociais</option>
              <option value="Feiras e Exposições Sensoriais">Feiras e Exposições Sensoriais</option>
              <option value="Eventos Esportivos Adaptados">Eventos Esportivos Adaptados</option>
              <option value="Grupos de Apoio e Networking">Grupos de Apoio e Networking</option>
              <option value="Palestras">Palestras</option>
            </Select>
          </InputContainer>
          <InputContainer>
            <Label>Data:</Label>
            <Input
              type="date"
              value={data}
              onChange={(e) => setData(e.target.value)}
              required
            />
          </InputContainer>
          <InputContainer>
            <Label>Horário:</Label>
            <Input
              type="time"
              value={horario}
              onChange={(e) => setHorario(e.target.value)}
              required
            />
          </InputContainer>
          <InputContainer>
            <Label>Instituição:</Label>
            <Input
              type="text"
              value={instituicao}
              onChange={(e) => setInstituicao(e.target.value)}
              required
            />
          </InputContainer>
          <InputContainer>
            <Label>Endereço:</Label>
            <Input
              type="text"
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
              required
            />
          </InputContainer>
          <InputContainer>
            <Label>Bairro:</Label>
            <Input
              type="text"
              value={bairro}
              onChange={(e) => setBairro(e.target.value)}
              required
            />
          </InputContainer>
          <InputContainer>
            <Label>Complemento/Referência:</Label>
            <Input
              type="text"
              value={complemento}
              onChange={(e) => setComplemento(e.target.value)}
            />
          </InputContainer>
          <Button type="submit">Criar Evento</Button>
        </Form>
        {message && <Message success>{message}</Message>}

        <HistoryContainer>
          <h2>Histórico de Eventos Criados</h2>
          {historicoEventos.length > 0 ? (
            historicoEventos.map((event) => (
              <HistoryItem key={event.id}>
                <p>
                  <strong>Nome do Organizador:</strong> {event.organizador}
                </p>
                <p>
                  <strong>Categoria:</strong> {event.categoria}
                </p>
                <p>
                  <strong>Localização:</strong> {event.localizacao}
                </p>
                <p>
                  <strong>Data:</strong> {formatDate(event.data)}
                </p>
                <p>
                  <strong>Horário:</strong> {event.horario}
                </p>
                <p>
                  <strong>Instituição:</strong> {event.instituicao}
                </p>
                <HistoryButton onClick={() => handleDeleteEvent(event.id)}>
                  Deletar Evento
                </HistoryButton>
              </HistoryItem>
            ))
          ) : (
            <p>Nenhum evento criado ainda.</p>
          )}
        </HistoryContainer>
      </Container>
      <Footer />
    </>
  );
};

export default CriarEventoPage;
