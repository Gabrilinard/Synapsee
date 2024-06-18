import React, { useState } from "react";
import { StyledContainer, StyledSearchForm, StyledResultsContainer, StyledResultItem, StyledButton } from "./style";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Footer from '../../components/Footer';

const Home = () => {
    const navigate = useNavigate();
    const [searchCriteria, setSearchCriteria] = useState({
        localizacao: "",
        areaEspecializacao: "",
        disponibilidade: ""
    });
    const [searchResults, setSearchResults] = useState([]);
    const [showResults, setShowResults] = useState(false);

    // Função para realizar a pesquisa de especialistas
    const searchExperts = (event) => {
        event.preventDefault(); // Evita o comportamento padrão do formulário

        const usersStorage = JSON.parse(localStorage.getItem("users_bd")) || [];

        // Verifica se todos os campos de pesquisa estão vazios
        const isSearchEmpty =
            (!searchCriteria.localizacao || !searchCriteria.localizacao.trim()) &&
            (!searchCriteria.areaEspecializacao || !searchCriteria.areaEspecializacao.trim()) &&
            (!searchCriteria.disponibilidade || !searchCriteria.disponibilidade.trim());

        let results = usersStorage;

        // Filtra apenas os especialistas com base nos critérios de pesquisa
        if (!isSearchEmpty) {
            results = usersStorage.filter(user =>
                user.especialista === true && // Verifica se é especialista
                (!searchCriteria.localizacao || (user.location && user.location.toLowerCase().includes(searchCriteria.localizacao.toLowerCase()))) &&
                (!searchCriteria.areaEspecializacao || (user.areaEspecializacao && user.areaEspecializacao.toLowerCase().includes(searchCriteria.areaEspecializacao.toLowerCase()))) &&
                (!searchCriteria.disponibilidade || (user.disponibilidade && user.disponibilidade.toLowerCase().includes(searchCriteria.disponibilidade.toLowerCase())))
            );
        } else {
            // Se todos os critérios de pesquisa estiverem vazios, mostrar todos os especialistas
            results = usersStorage.filter(user => user.especialista === true);
        }

        setSearchResults(results);
        setShowResults(true); // Mostrar os resultados após a pesquisa
    };

    const handleSelectExpert = (expert) => {
        navigate("/agendarconsulta", { state: { selectedExpert: expert } });
    };

    return (
        <>
            <Header />
            <StyledContainer>
                <h1>Encontre um Especialista em Sustentabilidade</h1>
                <StyledSearchForm onSubmit={searchExperts}>
                    <input type="text" placeholder="Localização" value={searchCriteria.localizacao} onChange={(e) => setSearchCriteria({ ...searchCriteria, localizacao: e.target.value })} />
                    <input type="text" placeholder="Área de Especialização" value={searchCriteria.areaEspecializacao} onChange={(e) => setSearchCriteria({ ...searchCriteria, areaEspecializacao: e.target.value })} />
                    <input type="text" placeholder="Disponibilidade" value={searchCriteria.disponibilidade} onChange={(e) => setSearchCriteria({ ...searchCriteria, disponibilidade: e.target.value })} />
                    <StyledButton type="submit">Pesquisar</StyledButton>
                </StyledSearchForm>
                {showResults && (
                    <StyledResultsContainer>
                        {searchResults.length > 0 ? (
                            searchResults.map((professional, index) => (
                                <StyledResultItem key={professional.email || index}>
                                    <h2>{professional.name}</h2>
                                    <p>Localização: {professional.location}</p>
                                    <p>Área de Especialização: {professional.areaEspecializacao}</p>
                                    <p>Disponibilidade: {professional.disponibilidade}</p>
                                    <Link to={"/AgendarConsulta"} state={{ selectedExpert: professional }}>
                                        <StyledButton onClick={() => handleSelectExpert(professional)}>Agendar Consulta</StyledButton>
                                    </Link>
                                </StyledResultItem>
                            ))
                        ) : (
                            <p>Nenhum especialista encontrado com os critérios de pesquisa.</p>
                        )}
                    </StyledResultsContainer>
                )}
            </StyledContainer>
                <Footer />
        </>
    );
};

export default Home;
