import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {
  StyledContainer,
  StyledSearchForm,
  StyledResultsContainer,
  StyledResultItem,
  StyledButton,
  StyledTitle,
  StyledInput,
  StyledSelect,
} from './style';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

const Home = () => {
  const [searchCriteria, setSearchCriteria] = useState({
    categoria: '',
    localizacao: '',
    instituicao: '',
    data: '',
    estado: '',
    cidade: '',
  });

  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [userEvents, setUserEvents] = useState([]);

  useEffect(() => {
    // Carregar eventos do localStorage ao montar o componente
    const eventsStorage =
      JSON.parse(localStorage.getItem('events_bd')) || [];
    setSearchResults(eventsStorage);
  
    // Carregar eventos inscritos pelo usuário
    const storedUserEvents =
      JSON.parse(localStorage.getItem('user_events')) || [];
    setUserEvents(storedUserEvents);
  
    // Marcar eventos como inscritos ou não
    const markedResults = eventsStorage.map(event => ({
      ...event,
      inscrito: storedUserEvents.includes(event.id)
    }));
    setSearchResults(markedResults);
  
  }, []); // Carrega os resultados apenas uma vez ao montar o componente

  // Opções de categoria para o campo de pesquisa
  const categoriaOptions = [
    'Sessões Sensoriais',
    'Oficinas Criativas',
    'Passeios ao Ar Livre',
    'Eventos Culturais',
    'Workshops de Habilidades Sociais',
    'Feiras e Exposições Sensoriais',
    'Eventos Esportivos Adaptados',
    'Grupos de Apoio e Networking',
    'Palestras',
  ];

  // Função para realizar a pesquisa de eventos
  const searchEvents = (event) => {
    event.preventDefault(); // Evita o comportamento padrão do formulário

    const eventsStorage =
      JSON.parse(localStorage.getItem('events_bd')) || [];

    // Verifica se todos os campos de pesquisa estão vazios
    const isSearchEmpty =
      (!searchCriteria.categoria ||
        !searchCriteria.categoria.trim()) &&
      (!searchCriteria.localizacao ||
        !searchCriteria.localizacao.trim()) &&
      (!searchCriteria.instituicao ||
        !searchCriteria.instituicao.trim()) &&
      (!searchCriteria.data || !searchCriteria.data.trim()) &&
      (!searchCriteria.estado ||
        !searchCriteria.estado.trim()) &&
      (!searchCriteria.cidade ||
        !searchCriteria.cidade.trim());

    let results = eventsStorage;

    // Filtra os eventos com base nos critérios de pesquisa
    if (!isSearchEmpty) {
      results = eventsStorage.filter(
        (event) =>
          (!searchCriteria.categoria ||
            (event.categoria &&
              event.categoria
                .toLowerCase()
                .includes(
                  searchCriteria.categoria.toLowerCase()
                ))) &&
          (!searchCriteria.localizacao ||
            (event.localizacao &&
              event.localizacao
                .toLowerCase()
                .includes(
                  searchCriteria.localizacao.toLowerCase()
                ))) &&
          (!searchCriteria.data ||
            (event.data &&
              event.data.includes(searchCriteria.data))) &&
          (!searchCriteria.estado ||
            (event.estado &&
              event.estado
                .toLowerCase()
                .includes(
                  searchCriteria.estado.toLowerCase()
                ))) &&
          (!searchCriteria.cidade ||
            (event.cidade &&
              event.cidade
                .toLowerCase()
                .includes(
                  searchCriteria.cidade.toLowerCase()
                )))
      );
    }

    // Adicionar propriedade 'inscrito' aos eventos filtrados
    results = results.map((event) => ({
      ...event,
      inscrito: userEvents.includes(event.id),
    }));

    setSearchResults(results);
    setShowResults(true); // Mostrar os resultados após a pesquisa
  };

  // Função para formatar a data no formato brasileiro (dd/mm/aaaa)
  const formatDate = (date) => {
    return format(new Date(date), 'dd/MM/yyyy');
  };

  // Função para lidar com a inscrição/desinscrição do usuário em um evento
  const handleSubscription = (event) => {
    const storedUserEvents =
      JSON.parse(localStorage.getItem('user_events')) || [];

    // Verifica se o usuário já está inscrito neste evento
    const alreadySubscribed = storedUserEvents.includes(event.id);

    if (alreadySubscribed) {
      // Confirmar a ação com o usuário
      const confirmUnsubscribe = window.confirm(
        'Tem certeza que deseja cancelar a inscrição neste evento?'
      );
      if (!confirmUnsubscribe) {
        return; // Cancela a ação se o usuário pressionar "Cancelar" no alerta
      }

      // Desinscrever usuário do evento
      const updatedUserEvents = storedUserEvents.filter(
        (id) => id !== event.id
      );
      localStorage.setItem(
        'user_events',
        JSON.stringify(updatedUserEvents)
      );
      setUserEvents(updatedUserEvents);

      // Atualiza o estado global de eventos inscritos em EventosInscritos
      setSearchResults(
        searchResults.map((e) => {
          if (e.id === event.id) {
            return { ...e, inscrito: false };
          }
          return e;
        })
      );

      // Remover evento inscrito na página EventosInscritos, se necessário
      const eventoInscrito = JSON.parse(
        localStorage.getItem('evento_inscrito')
      );
      if (eventoInscrito && eventoInscrito.id === event.id) {
        localStorage.removeItem('evento_inscrito');
      }
    } else {
      // Inscrever usuário no evento
      const updatedUserEvents = [...storedUserEvents, event.id];
      localStorage.setItem(
        'user_events',
        JSON.stringify(updatedUserEvents)
      );
      setUserEvents(updatedUserEvents);

      // Atualizar evento inscrito na página EventosInscritos
      localStorage.setItem('evento_inscrito', JSON.stringify(event));

      // Atualizar estado para refletir a inscrição
      setSearchResults(
        searchResults.map((e) => {
          if (e.id === event.id) {
            return { ...e, inscrito: true };
          }
          return e;
        })
      );
    }
  };

  return (
    <>
      <Header />
      <StyledContainer>
        <StyledTitle>
          Encontre Eventos Educativos Relacionados ao Autismo
        </StyledTitle>
        <StyledSearchForm onSubmit={searchEvents}>
          <StyledSelect
            value={searchCriteria.categoria}
            onChange={(e) =>
              setSearchCriteria({
                ...searchCriteria,
                categoria: e.target.value,
              })
            }
          >
            <option value="">Selecione a categoria</option>
            {categoriaOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </StyledSelect>
          <StyledInput
            type="text"
            placeholder="Localização"
            value={searchCriteria.localizacao}
            onChange={(e) =>
              setSearchCriteria({
                ...searchCriteria,
                localizacao: e.target.value,
              })
            }
          />
          <StyledInput
            type="date"
            placeholder="Data"
            value={searchCriteria.data}
            onChange={(e) =>
              setSearchCriteria({
                ...searchCriteria,
                data: e.target.value,
              })
            }
          />
          <StyledButton type="submit">Pesquisar</StyledButton>
        </StyledSearchForm>
        {showResults && (
          <StyledResultsContainer>
            {searchResults.length > 0 ? (
              searchResults.map((event, index) => (
                <StyledResultItem key={event.id || index}>
                  <h2>{event.titulo}</h2>
                  <p style={{ fontSize: '29px', fontWeight: 'bold' }}>
                    {event.organizador}
                  </p>
                  <p>Categoria: {event.categoria}</p>
                  <p>
                    Estado/Cidade:{' '}
                    {`${event.cidade}, ${event.estado}`}
                  </p>
                  <p>Instituição: {event.instituicao}</p>
                  <p>Data: {formatDate(event.data)}</p>
                  {event.inscrito ? (
                    <StyledButton
                      inscrito
                      onClick={() => handleSubscription(event)}
                    >
                      Tirar Inscrição
                    </StyledButton>
                  ) : (
                    <Link to="/inscricao">
                      <StyledButton
                        onClick={() => handleSubscription(event)}
                      >
                        Inscrever-se
                      </StyledButton>
                    </Link>
                  )}
                </StyledResultItem>
              ))
            ) : (
              <p>Nenhum evento encontrado.</p>
            )}
          </StyledResultsContainer>
        )}
      </StyledContainer>
      <Footer />
    </>
  );
};

export default Home;
